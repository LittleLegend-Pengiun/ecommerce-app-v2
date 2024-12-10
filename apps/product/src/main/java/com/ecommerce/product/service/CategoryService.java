package com.ecommerce.product.service;
import com.ecommerce.product.dto.CategoryDTO;
import com.ecommerce.product.exception.ItemNotExistsForUpdateException;
import com.ecommerce.product.mapper.CategoryMapper;
import com.ecommerce.product.model.Category;
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

    public List<CategoryDTO> getAllCategories() {
        return categoryRepo.findAll().stream().map(CategoryMapper::toDTO).toList();
    }

    public CategoryDTO saveCategory(CategoryDTO dto) {
        Category newCategory = categoryRepo.save(CategoryMapper.toEntity(dto));
        return CategoryMapper.toDTO(newCategory);
    }

    public CategoryDTO updateCategory(CategoryDTO dto) {
        Category category = CategoryMapper.toEntity(dto);
        Optional<Category> existingCategory = categoryRepo.findById(category.getId());
        if (existingCategory.isEmpty()) {
            log.info("Category with id: {} doesn't exist for updating!", category.getId());
            String exceptionMessage = String.format(
                    "Exception occurred in %s.%s: %s. Id: %s",
                    this.getClass().getSimpleName(),  // Class name
                    "updateCategory",                    // Method name
                    "Category doesn't exist for updating!",          // Custom error description
                    category.getId()
            );
            throw new ItemNotExistsForUpdateException(exceptionMessage);
        }
        Category updatedCategory = categoryRepo.save(category);
        log.info("Category with id: {} updated successfully", category.getId());
        return CategoryMapper.toDTO(updatedCategory);
    }

    public void deleteCategoryById(Integer id) {
        categoryRepo.deleteById(id);
    }
}
