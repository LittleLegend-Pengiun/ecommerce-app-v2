package com.ecommerce.product.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ecommerce.product.repository.model.Product;

public interface ProductRepo extends JpaRepository<Product, Integer> {
}
