package com.ecommerce.product.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ecommerce.product.repository.model.product.Category;

public interface CategoryRepo extends JpaRepository<Category, Integer> {
}
