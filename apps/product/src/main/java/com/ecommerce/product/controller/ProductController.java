package com.ecommerce.product.controller;
import com.ecommerce.product.application.request.CreateProductRequest;
import com.ecommerce.product.application.request.EditProductRequest;
import com.ecommerce.product.application.response.GenericResponse;
import com.ecommerce.product.application.response.ProductResponse;
import com.ecommerce.product.application.response.ProductListResponse;
import com.ecommerce.product.service.ProductService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/product")
@RequiredArgsConstructor
@Validated
public class ProductController {
    private final ProductService productService;

    @GetMapping("/all")
    public ResponseEntity<ProductListResponse> getAllProducts() {
        return new ResponseEntity<>(productService.getAllProducts(), HttpStatus.OK);
    }
    @PostMapping("")
    public ResponseEntity<ProductResponse> saveProduct(@Valid @RequestBody CreateProductRequest dto){
        return new ResponseEntity<>(productService.saveProduct(dto), HttpStatus.OK);
    }

    @PutMapping("")
    public ResponseEntity<ProductResponse> updateProduct(@Valid @RequestBody EditProductRequest dto){
        return new ResponseEntity<>(productService.updateProduct(dto), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<GenericResponse> deleteProductById(@Valid @PathVariable Integer id) {
        productService.deleteProductById(id);
        return new ResponseEntity<>(new GenericResponse("Delete product successfully!"), HttpStatus.OK);
    }
}
