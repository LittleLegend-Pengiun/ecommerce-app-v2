package com.ecommerce.product.service;
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

    public List<Category> getAllCategories() {
        try {
            return categoryRepo.findAll();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public Category saveCategory(Category category) {
        try {
            return categoryRepo.save(category);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public Category updateCategory(Category category) {
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
        return updatedCategory;
    }

    public void deleteCategoryById(Integer id) {
        categoryRepo.deleteById(id);
    }
}
