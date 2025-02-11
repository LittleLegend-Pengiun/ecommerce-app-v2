package com.ecommerce.product.service;
import com.ecommerce.product.application.response.CategoryResponse;
import com.ecommerce.product.application.response.CategoryListResponse;
import com.ecommerce.product.application.utils.dto.CategoryDto;
import com.ecommerce.product.application.exception.NotFoundByIdException;
import com.ecommerce.product.application.utils.mapper.CategoryMapper;
import com.ecommerce.product.repository.model.product.Category;
import com.ecommerce.product.repository.CategoryRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class CategoryService {
    private final CategoryRepo categoryRepo;

    public CategoryListResponse getAllCategories() {
        List<CategoryDto> categoryDtos = categoryRepo.findAll().stream().map(CategoryMapper::toDto).toList();
        return new CategoryListResponse(categoryDtos);
    }

    public CategoryListResponse saveAll(List<CategoryDto> categoryDtos) {
        List<Category> categories = categoryRepo.saveAll(categoryDtos.stream().map(CategoryMapper::toEntity).toList());
        List<CategoryDto> updatedCategoryDtos = categories.stream().map(CategoryMapper::toDto).toList();
        return new CategoryListResponse(updatedCategoryDtos);
    }

    public CategoryResponse saveCategory(CategoryDto dto) {
        Category newCategory = categoryRepo.save(CategoryMapper.toEntity(dto));
        CategoryDto categoryDto = CategoryMapper.toDto(newCategory);
        return new CategoryResponse(categoryDto);
    }

    public CategoryResponse updateCategory(CategoryDto dto) {
        Category category = CategoryMapper.toEntity(dto);
        Optional<Category> existingCategory = categoryRepo.findById(category.getId());
        if (existingCategory.isEmpty()) {
            log.info("Category with id: {} doesn't exist for updating!", category.getId());
            throw new NotFoundByIdException(this.getClass().getSimpleName(), "updateCategory", "Category doesn't exist for updating!", category.getId());
        }
        Category updatedCategory = categoryRepo.save(category);
        log.info("Category with id: {} updated successfully", category.getId());
        CategoryDto updatedCategoryDto = CategoryMapper.toDto(updatedCategory);
        return new CategoryResponse(updatedCategoryDto);
    }

    public void deleteAll() {
        categoryRepo.deleteAll();
    }

    public void deleteCategoryById(Integer id) {
        categoryRepo.deleteById(id);
    }
}
