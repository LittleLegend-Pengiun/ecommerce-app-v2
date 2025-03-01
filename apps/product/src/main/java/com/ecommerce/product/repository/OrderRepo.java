package com.ecommerce.product.repository;

import com.ecommerce.product.repository.model.product.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepo extends JpaRepository<Order, Integer> {
}
