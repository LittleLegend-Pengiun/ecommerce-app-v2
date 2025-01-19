package com.ecommerce.product.application.request;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class VerifyTokenRequest {
    @NotNull
    @NotEmpty
    private String token;
}
