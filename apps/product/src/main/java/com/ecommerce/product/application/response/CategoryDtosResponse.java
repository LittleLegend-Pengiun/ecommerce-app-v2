package com.ecommerce.product.application.response;

import com.ecommerce.product.application.utils.dto.CategoryDto;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@JsonInclude(JsonInclude.Include.NON_EMPTY)
@Builder
@Data
@AllArgsConstructor
public class CategoryDtosResponse {
    private List<CategoryDto> categories;
}
