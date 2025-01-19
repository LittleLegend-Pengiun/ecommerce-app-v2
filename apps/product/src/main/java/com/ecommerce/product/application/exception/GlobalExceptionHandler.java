package com.ecommerce.product.application.exception;

import lombok.extern.slf4j.Slf4j;
import org.hibernate.TransientObjectException;
import org.springframework.core.env.Environment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.io.IOException;
import java.time.format.DateTimeParseException;
import java.util.Arrays;
import java.util.List;

@ControllerAdvice
@Slf4j
public class GlobalExceptionHandler {
    List<String> profiles;
    GlobalExceptionHandler(@Autowired Environment environment) {
        profiles = Arrays.asList(environment.getActiveProfiles());
    }

    @ExceptionHandler({RuntimeException.class})
    public ResponseEntity<Object> handleRuntimeException(RuntimeException exception) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(this.profiles.contains("dev") ? "Internal Server Error: " + exception.getMessage() + buildStackTrace(exception) : "Internal Server Error");
    }

    @ExceptionHandler({HttpMessageNotReadableException.class})
    public ResponseEntity<Object> handleHttpMessageNotReadableException(HttpMessageNotReadableException exception) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("HttpMessageNotReadableException Error: Please recheck your HTTP Request Syntax!");
    }

    @ExceptionHandler({NotFoundByIdException.class})
    public ResponseEntity<Object> handleNotFoundExceptionException(NotFoundByIdException exception) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("NotFoundException ERROR: " + exception.getMessage());
    }

    @ExceptionHandler({MethodArgumentNotValidException.class})
    public ResponseEntity<Object> handleMethodArgumentNotValidException(MethodArgumentNotValidException exception) {
        MethodArgumentNotValidExceptionError errorObject = new MethodArgumentNotValidExceptionError(exception);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorObject.getMessage());
    }

    record MethodArgumentNotValidExceptionError(MethodArgumentNotValidException exception) {
        public String getMessage() {
            BindingResult result = exception.getBindingResult();
            List<FieldError> fieldErrors = result.getFieldErrors();
            StringBuilder message = new StringBuilder("API Argument Validation Error:\n\n");
            for (FieldError error : fieldErrors) {
                message.append("- ").append(error.getField()).append(' ').append(error.getDefaultMessage()).append('\n');
            }
            return message.toString();
        }
    }

    @ExceptionHandler({DataAccessException.class})
    public ResponseEntity<Object> handleDataAccessException(DataAccessException exception) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(
                this.profiles.contains("dev") ? "DataAccessException Error:\n" + exception.getMessage() + "DataAccessException Root Cause:\n" + exception.getRootCause() + "\n\n" : "Internal Server Error"
        );
    }

    @ExceptionHandler({TransientObjectException.class})
    public ResponseEntity<Object> handleTransientObjectException(TransientObjectException exception) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(
                this.profiles.contains("dev") ? "TransientObjectException Error: " + exception.getMessage() : "Internal Server Error"
        );
    }

    @ExceptionHandler({IOException.class})
    public ResponseEntity<Object> handleIOException(IOException exception) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(
                this.profiles.contains("dev") ? "IOException Error: " + exception.getMessage() : "Internal Server Error"
        );
    }

    @ExceptionHandler({DateTimeParseException.class})
    public ResponseEntity<Object> handleDateTimeParseException(DateTimeParseException exception) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(
                this.profiles.contains("dev") ? "DateTimeParseException Error: " + exception.getMessage() + " " + buildStackTrace(exception) : "DateTimeParseException Error"
        );
    }

    static StringBuilder buildStackTrace(Exception exception) {
        StringBuilder stackTraceSb = new StringBuilder();
        stackTraceSb.append("\n\n");
        for (StackTraceElement e : exception.getStackTrace()) {
            stackTraceSb.append(e.toString()).append('\n');
        }
        return stackTraceSb;
    }
}
