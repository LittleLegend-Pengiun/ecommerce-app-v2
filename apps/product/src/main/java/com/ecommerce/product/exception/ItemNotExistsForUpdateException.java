package com.ecommerce.product.exception;

public class ItemNotExistsForUpdateException extends RuntimeException{
    public ItemNotExistsForUpdateException(String message) {
        super(message);
    }
}
