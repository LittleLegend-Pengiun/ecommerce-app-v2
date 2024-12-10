package com.ecommerce.product.mapper;

import com.ecommerce.product.dto.CategoryDTO;
import com.ecommerce.product.model.Category;

public class CategoryMapper {
    public static CategoryDTO toDTO(Category category){
        if (category == null) {
            return null;
        }

        CategoryDTO dto = new CategoryDTO();
        dto.setId(category.getId());
        dto.setName(category.getName());
        return dto;
    }

    public static Category toEntity(CategoryDTO dto) {
        if (dto == null) {
            return null;
        }

        Category category = new Category();
        category.setId(dto.getId());
        category.setName(dto.getName());
        return category;
    }
}
