package com.ecommerce.product.repository;

import com.ecommerce.product.repository.model.product.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemRepo extends JpaRepository<OrderItem, Integer> {
}
