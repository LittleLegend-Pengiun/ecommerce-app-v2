package com.ecommerce.product.controller;
import com.ecommerce.product.model.Category;
import com.ecommerce.product.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/category")
@RequiredArgsConstructor
@Validated
public class CategoryController {
    private final CategoryService categoryService;

    @GetMapping("/all")
    public ResponseEntity<List<Category>> getAllCategories() {
        return ResponseEntity.ok().body(categoryService.getAllCategories());
    }

    @PostMapping("")
    public ResponseEntity<Category> saveCategory(@RequestBody Category category){
        return ResponseEntity.ok().body(categoryService.saveCategory(category));
    }

    @PutMapping("")
    public ResponseEntity<Category> updateCategory(@RequestBody Category category){
        return ResponseEntity.ok().body(categoryService.updateCategory(category));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCategoryById(@PathVariable Integer id) {
        categoryService.deleteCategoryById(id);
        return ResponseEntity.ok().body("Delete category successfully!");
    }
}
