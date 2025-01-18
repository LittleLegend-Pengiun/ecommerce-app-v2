package com.ecommerce.user.application.request;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class JwtDecodeRequest {
    @NotNull
    @NotEmpty
    private String token;
}
