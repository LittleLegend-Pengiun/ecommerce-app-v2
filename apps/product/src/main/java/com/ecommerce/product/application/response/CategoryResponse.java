package com.ecommerce.product.application.response;

import com.ecommerce.product.application.utils.dto.CategoryDto;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@JsonInclude(JsonInclude.Include.NON_EMPTY)
@Builder
@Data
@AllArgsConstructor
public class CategoryResponse {
    private CategoryDto category;
}
