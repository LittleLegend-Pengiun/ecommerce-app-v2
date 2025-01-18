package com.ecommerce.user.application.exeption;

import com.ecommerce.user.application.response.GenericResponse;
import io.jsonwebtoken.JwtException;
import jakarta.validation.ValidationException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.NoSuchElementException;

@ControllerAdvice
@Slf4j
public class GlobalExceptionHandler {

    @ExceptionHandler({BadRequestException.class, ValidationException.class, IllegalArgumentException.class, HttpMessageNotReadableException.class,
            MethodArgumentNotValidException.class, IllegalStateException.class})
    public ResponseEntity<GenericResponse> handleBadRequest(Exception exception) {
        log.error(exception.getMessage());
        if (exception.getClass().getSimpleName().equals("BadRequestException")) {
            return new ResponseEntity<>(new GenericResponse("Error: " + exception.getMessage()), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(new GenericResponse("Error: Bad request"), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler({NotFoundException.class})
    public ResponseEntity<GenericResponse> handleNotFound(NotFoundException exception) {
        log.error(exception.getMessage());
        return new ResponseEntity<>(new GenericResponse("Error: Not found" + exception.getMessage()), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler({DataAccessException.class, NoSuchElementException.class})
    public ResponseEntity<GenericResponse> handleInternalServerError(RuntimeException exception) {
        log.error(exception.getMessage());
        return new ResponseEntity<>(new GenericResponse("Internal server error"), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler({AuthenticationException.class, JwtException.class})
    public ResponseEntity<GenericResponse> handleForbidden(RuntimeException exception) {
        log.error(exception.getMessage());
        return new ResponseEntity<>(new GenericResponse(exception.getMessage()), HttpStatus.UNAUTHORIZED);
    }
}
