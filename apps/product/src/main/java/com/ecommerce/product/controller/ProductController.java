package com.ecommerce.product.controller;
import com.ecommerce.product.dto.ProductDto;
import com.ecommerce.product.service.ProductService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
@RequiredArgsConstructor
@Validated
public class ProductController {
    private final ProductService productService;

    @GetMapping("/all")
    public ResponseEntity<List<ProductDto>> getAllProducts() {
        return ResponseEntity.status(HttpStatus.OK).body(productService.getAllProducts());
    }

    @PostMapping("")
    public ResponseEntity<ProductDto> saveProduct(@Valid @RequestBody ProductDto dto){
        return ResponseEntity.status(HttpStatus.OK).body(productService.saveProduct(dto));
    }

    @PutMapping("")
    public ResponseEntity<ProductDto> updateProduct(@Valid @RequestBody ProductDto dto){
        return ResponseEntity.status(HttpStatus.OK).body(productService.updateProduct(dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProductById(@Valid @PathVariable Integer id) {
        productService.deleteProductById(id);
        return ResponseEntity.status(HttpStatus.OK).body("Delete product successfully!");
    }
}
