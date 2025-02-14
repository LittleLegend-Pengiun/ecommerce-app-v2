package com.ecommerce.product.application.utils.dto;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class OrderItemDto {
    private Integer id;
    private Integer productId;
    private Integer quantity;
}
