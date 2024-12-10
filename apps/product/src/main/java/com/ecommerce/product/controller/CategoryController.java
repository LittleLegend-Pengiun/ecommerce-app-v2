package com.ecommerce.product.controller;
import com.ecommerce.product.dto.CategoryDTO;
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
    public ResponseEntity<List<CategoryDTO>> getAllCategories() {
        return ResponseEntity.ok().body(categoryService.getAllCategories());
    }

    @PostMapping("")
    public ResponseEntity<CategoryDTO> saveCategory(@RequestBody CategoryDTO dto){
        return ResponseEntity.ok().body(categoryService.saveCategory(dto));
    }

    @PutMapping("")
    public ResponseEntity<CategoryDTO> updateCategory(@RequestBody CategoryDTO dto){
        return ResponseEntity.ok().body(categoryService.updateCategory(dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCategoryById(@PathVariable Integer id) {
        categoryService.deleteCategoryById(id);
        return ResponseEntity.ok().body("Delete category successfully!");
    }
}