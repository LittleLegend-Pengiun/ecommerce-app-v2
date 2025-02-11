package com.ecommerce.product.service;
import com.ecommerce.product.application.response.ProductDtoResponse;
import com.ecommerce.product.application.response.ProductDtosResponse;
import com.ecommerce.product.application.utils.dto.ProductDto;
import com.ecommerce.product.application.exception.NotFoundByIdException;
import com.ecommerce.product.application.utils.mapper.ProductMapper;
import com.ecommerce.product.repository.model.product.Product;
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

    public ProductDtosResponse getAllProducts(){
        List<ProductDto> productDtos = productRepo.findAll().stream().map(ProductMapper::toDto).toList();
        return new ProductDtosResponse(productDtos);
    }

    public ProductDtosResponse saveAll(List<ProductDto> productDtos) {
        List<Product> saveProducts = productRepo.saveAll(productDtos.stream().map(ProductMapper::toEntity).toList());
        List<ProductDto> savedProductDtos = saveProducts.stream().map(ProductMapper::toDto).toList();
        return new ProductDtosResponse(savedProductDtos);
    }

    public ProductDtoResponse saveProduct(ProductDto dto) {
        Product newProduct = productRepo.save(ProductMapper.toEntity(dto));
        ProductDto productDto = ProductMapper.toDto(newProduct);
        return new ProductDtoResponse(productDto);
    }

    public ProductDtoResponse updateProduct(ProductDto dto) {
        Product product = ProductMapper.toEntity(dto);
        Optional<Product> existingProduct = productRepo.findById(product.getId());
        if (existingProduct.isEmpty()) {
            log.info("Product with id: {} doesn't exist for updating!", product.getId());
            throw new NotFoundByIdException(this.getClass().getSimpleName(), "updateProduct", "Product doesn't exist for updating!", product.getId());
        }
        Product updatedProduct = productRepo.save(product);
        log.info("Product with id: {} updated successfully", product.getId());
        ProductDto productDto = ProductMapper.toDto(updatedProduct);
        return new ProductDtoResponse(productDto);
    }

    public void deleteProductById(Integer id) {
        productRepo.deleteById(id);
    }

    public void deleteAll() {
        productRepo.deleteAll();
    }
}
