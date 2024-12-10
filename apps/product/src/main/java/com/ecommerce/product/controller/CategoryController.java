package com.ecommerce.product.controller;
import com.ecommerce.product.dto.CategoryDto;
import com.ecommerce.product.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
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
    public ResponseEntity<List<CategoryDto>> getAllCategories() {
        return ResponseEntity.status(HttpStatus.OK).body(categoryService.getAllCategories());
    }

    @PostMapping("")
    public ResponseEntity<CategoryDto> saveCategory(@RequestBody CategoryDto dto){
        return ResponseEntity.status(HttpStatus.OK).body(categoryService.saveCategory(dto));
    }

    @PutMapping("")
    public ResponseEntity<CategoryDto> updateCategory(@RequestBody CategoryDto dto){
        return ResponseEntity.status(HttpStatus.OK).body(categoryService.updateCategory(dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCategoryById(@PathVariable Integer id) {
        categoryService.deleteCategoryById(id);
        return ResponseEntity.status(HttpStatus.OK).body("Delete category successfully!");
    }
}
