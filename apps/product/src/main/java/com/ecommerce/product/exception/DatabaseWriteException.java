package com.ecommerce.product.exception;

public class DatabaseWriteException extends RuntimeException{
    public DatabaseWriteException(String message) {
        super(message);
    }
}
