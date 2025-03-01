package com.ecommerce.product.application.utils.mapper;

import com.ecommerce.product.application.utils.dto.CategoryDto;
import com.ecommerce.product.repository.model.product.Category;

public class CategoryMapper {
    public static CategoryDto toDto(Category category){
        if (category == null) {
            return null;
        }

        return CategoryDto.builder().id(category.getId()).name(category.getName()).build();
    }

    public static Category toEntity(CategoryDto dto) {
        if (dto == null) {
            return null;
        }

        return Category.builder().id(dto.getId()).name(dto.getName()).build();
    }
}
