package com.ecommerce.product.service;
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

    public List<Product> getAllProducts(){
        try {
            return productRepo.findAll();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public Product saveProduct(Product product) {
        try {
            return productRepo.save(product);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public Product updateProduct(Product product) {
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
        return updatedProduct;
    }

    public void deleteProductById(Integer id) {
        productRepo.deleteById(id);
    }
}
