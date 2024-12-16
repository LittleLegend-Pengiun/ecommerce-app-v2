package com.ecommerce.user.application;

import com.ecommerce.user.application.exeption.BadRequestException;
import com.ecommerce.user.application.exeption.NotFoundException;
import jakarta.validation.ValidationException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
@Slf4j
public class GlobalExceptionHandler {

    @ExceptionHandler({BadRequestException.class, ValidationException.class})
    public ResponseEntity<String> handleBadRequest(RuntimeException exception) {
        return new ResponseEntity<>("Bad request: " + exception.getMessage(), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler({NotFoundException.class})
    public ResponseEntity<String> handleNotFound(NotFoundException exception) {
        return new ResponseEntity<>("Not found: " + exception.getMessage(), HttpStatus.NOT_FOUND);
    }
}
