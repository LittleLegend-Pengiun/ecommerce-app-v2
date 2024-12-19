package com.ecommerce.user.application;

import com.ecommerce.user.application.exeption.BadRequestException;
import com.ecommerce.user.application.exeption.NotFoundException;
import jakarta.validation.ValidationException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
@Slf4j
public class GlobalExceptionHandler {

    @ExceptionHandler({BadRequestException.class, ValidationException.class, IllegalArgumentException.class, HttpMessageNotReadableException.class,
            MethodArgumentNotValidException.class})
    public ResponseEntity<String> handleBadRequest(Exception exception) {
        log.error(exception.getMessage());
        if (exception.getClass().getSimpleName().equals("BadRequestException")) {
            return new ResponseEntity<>("Error: " + exception.getMessage(), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>("Error: Bad request", HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler({NotFoundException.class})
    public ResponseEntity<String> handleNotFound(NotFoundException exception) {
        log.error(exception.getMessage());
        return new ResponseEntity<>("Error: Not found" + exception.getMessage(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler({DataAccessException.class})
    public ResponseEntity<String> handleInternalServerError(RuntimeException exception) {
        log.error(exception.getMessage());
        return new ResponseEntity<>("Internal server error: " + exception.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
