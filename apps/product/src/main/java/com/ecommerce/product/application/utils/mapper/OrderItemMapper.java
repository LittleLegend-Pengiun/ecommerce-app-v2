package com.ecommerce.product.application.utils.mapper;

import com.ecommerce.product.application.utils.dto.OrderItemDto;
import com.ecommerce.product.repository.ProductRepo;
import com.ecommerce.product.repository.model.product.OrderItem;
import com.ecommerce.product.repository.model.product.Product;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Slf4j
@RequiredArgsConstructor
@Component
public class OrderItemMapper {
    final private ProductRepo injectedProductRepo;

    private static ProductRepo staticProductRepo;

    @PostConstruct
    private void init() {
        staticProductRepo = injectedProductRepo; // Assign injected bean to static field
    }

    public static OrderItemDto toDto(OrderItem orderItem) {
        if (orderItem == null) {
            return null;
        }

        return OrderItemDto.builder()
                .id(orderItem.getId())
                .productId(orderItem.getProduct().getId())
                .quantity(orderItem.getQuantity())
                .build();
    }

    public static OrderItem toEntity(OrderItemDto dto) {
        if (dto == null) {
            return null;
        }

        Integer productId = dto.getProductId();
        Optional<Product> productQuery = staticProductRepo.findById(productId);

        if (productQuery.isEmpty()) {
            log.error("[OrderItemMapper::toEntity] productId not exist in Product table: {}", productId);
            return null;
        }

        Product product = productQuery.get();

        return OrderItem.builder()
                .id(dto.getId())
                .product(product)
                .quantity(dto.getQuantity())
                .build();
    }
}
