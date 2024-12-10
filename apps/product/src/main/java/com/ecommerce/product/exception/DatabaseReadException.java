package com.ecommerce.product.exception;

public class DatabaseReadException extends RuntimeException{
    public DatabaseReadException(String message) {
        super(message);
    }
}
