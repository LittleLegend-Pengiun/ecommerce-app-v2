package com.ecommerce.product.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler({RuntimeException.class})
    public ResponseEntity<Object> handleRuntimeException(RuntimeException exception) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(exception.getMessage());
    }
    @ExceptionHandler({ItemNotExistsForUpdateException.class})
    public ResponseEntity<Object> handleItemNotExistsForUpdateException(ItemNotExistsForUpdateException exception) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("ItemNotExistsForUpdateException ERROR: " + exception.getMessage());
    }
}
