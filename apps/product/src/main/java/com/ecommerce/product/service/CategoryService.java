package com.ecommerce.product.service;
import com.ecommerce.product.dto.CategoryDTO;
import com.ecommerce.product.mapper.CategoryMapper;
import com.ecommerce.product.model.Category;
import com.ecommerce.product.repository.CategoryRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class CategoryService {
    private final CategoryRepo categoryRepo;

    public List<CategoryDTO> getAllCategories() {
        try {
            return categoryRepo.findAll().stream().map(CategoryMapper::toDTO).toList();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public CategoryDTO saveCategory(CategoryDTO dto) {
        try {
            Category newCategory = categoryRepo.save(CategoryMapper.toEntity(dto));
            return CategoryMapper.toDTO(newCategory);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public CategoryDTO updateCategory(CategoryDTO dto) {
        try {
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
                throw new RuntimeException(new Exception(exceptionMessage));
            }
            Category updatedCategory = categoryRepo.save(category);
            log.info("Category with id: {} updated successfully", category.getId());
            return CategoryMapper.toDTO(updatedCategory);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public void deleteCategoryById(Integer id) {
        categoryRepo.deleteById(id);
    }
}
