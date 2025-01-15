package com.ecommerce.user.application.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import io.jsonwebtoken.Claims;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@JsonInclude(JsonInclude.Include.NON_EMPTY)
@Builder
@Data
@AllArgsConstructor
public class JwtDecodeResponse {
    private Claims payload;
}
