package com.ecommerce.product.service;
import com.ecommerce.product.dto.ProductDTO;
import com.ecommerce.product.mapper.ProductMapper;
import com.ecommerce.product.model.Product;
import com.ecommerce.product.repository.ProductRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class ProductService {
    private final ProductRepo productRepo;

    public List<ProductDTO> getAllProducts(){
        try {
            return productRepo.findAll().stream().map(ProductMapper::toDTO).toList();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public ProductDTO saveProduct(ProductDTO dto) {
        try {
            Product newProduct = productRepo.save(ProductMapper.toEntity(dto));
            return ProductMapper.toDTO(newProduct);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public ProductDTO updateProduct(ProductDTO dto) {
        try {
            Product product = ProductMapper.toEntity(dto);
            Optional<Product> existingProduct = productRepo.findById(product.getId());
            if (existingProduct.isEmpty()) {
                log.info("Product with id: {} doesn't exist for updating!", product.getId());
                String exceptionMessage = String.format(
                        "Exception occurred in %s.%s: %s. Id: %s",
                        this.getClass().getSimpleName(),  // Class name
                        "updateProduct",                    // Method name
                        "Product doesn't exist for updating!",          // Custom error description
                        product.getId()
                );
                throw new RuntimeException(new Exception(exceptionMessage));
            }
            Product updatedProduct = productRepo.save(product);
            log.info("Product with id: {} updated successfully", product.getId());
            return ProductMapper.toDTO(updatedProduct);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public void deleteProductById(Integer id) {
        productRepo.deleteById(id);
    }
}
