package com.ecommerce.product.service;
import com.ecommerce.product.dto.CategoryDto;
import com.ecommerce.product.dto.ProductDto;
import com.ecommerce.product.exception.NotFoundByIdException;
import com.ecommerce.product.mapper.CategoryMapper;
import com.ecommerce.product.mapper.ProductMapper;
import com.ecommerce.product.model.Category;
import com.ecommerce.product.model.Product;
import com.ecommerce.product.repository.ProductRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class ProductService {
    private final ProductRepo productRepo;

    public List<ProductDto> getAllProducts(){
        return productRepo.findAll().stream().map(ProductMapper::toDto).toList();
    }

    public List<ProductDto> saveAll(List<ProductDto> productDtos) {
        List<Product> saveProducts = productRepo.saveAll(productDtos.stream().map(ProductMapper::toEntity).toList());
        return saveProducts.stream().map(ProductMapper::toDto).toList();
    }

    public ProductDto saveProduct(ProductDto dto) {
        Product newProduct = productRepo.save(ProductMapper.toEntity(dto));
        return ProductMapper.toDto(newProduct);
    }

    public ProductDto updateProduct(ProductDto dto) {
        Product product = ProductMapper.toEntity(dto);
        Optional<Product> existingProduct = productRepo.findById(product.getId());
        if (existingProduct.isEmpty()) {
            log.info("Product with id: {} doesn't exist for updating!", product.getId());
            throw new NotFoundByIdException(this.getClass().getSimpleName(), "updateProduct", "Product doesn't exist for updating!", product.getId());
        }
        Product updatedProduct = productRepo.save(product);
        log.info("Product with id: {} updated successfully", product.getId());
        return ProductMapper.toDto(updatedProduct);
    }

    public void deleteProductById(Integer id) {
        productRepo.deleteById(id);
    }

    public void deleteAll() {
        productRepo.deleteAll();
    }
}
