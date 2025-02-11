package com.ecommerce.product.controller;
import com.ecommerce.product.application.request.CreateCategoryRequest;
import com.ecommerce.product.application.request.EditCategoryRequest;
import com.ecommerce.product.application.response.CategoryDtoResponse;
import com.ecommerce.product.application.response.CategoryDtosResponse;
import com.ecommerce.product.application.response.GenericResponse;
import com.ecommerce.product.application.utils.dto.CategoryDto;
import com.ecommerce.product.service.CategoryService;
import jakarta.validation.Valid;
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
    public ResponseEntity<CategoryDtosResponse> getAllCategories() {
        return new ResponseEntity<>(categoryService.getAllCategories(), HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<CategoryDtoResponse> saveCategory(@Valid @RequestBody CreateCategoryRequest dto){
        return new ResponseEntity<>(categoryService.saveCategory(dto), HttpStatus.OK);
    }

    @PutMapping("")
    public ResponseEntity<CategoryDtoResponse> updateCategory(@Valid @RequestBody EditCategoryRequest dto){
        return new ResponseEntity<>(categoryService.updateCategory(dto), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<GenericResponse> deleteCategoryById(@Valid @PathVariable Integer id) {
        categoryService.deleteCategoryById(id);
        return new ResponseEntity<>(new GenericResponse("Delete category successfully!"), HttpStatus.OK);
    }
}
