package com.ecommerce.user.application.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@JsonInclude(JsonInclude.Include.NON_EMPTY)
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class GenericResponse {
    private String message;
}
