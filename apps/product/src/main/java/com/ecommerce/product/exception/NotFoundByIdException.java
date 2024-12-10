package com.ecommerce.product.exception;

public class NotFoundByIdException extends RuntimeException{
    String className;
    String functionName;
    String exceptionMessage;
    Integer id;

    public NotFoundByIdException(String className, String functionName, String exceptionMessage, Integer id) {
        super(exceptionMessage);
        this.className = className;
        this.functionName = functionName;
        this.exceptionMessage = exceptionMessage;
        this.id = id;
    }

    public String getMessage(){
        return String.format(
                "Exception occurred in %s.%s: %s. Id: %s",
                className,  // Class name
                functionName,                    // Method name
                exceptionMessage,          // Custom error description
                id
        );
    }
}
