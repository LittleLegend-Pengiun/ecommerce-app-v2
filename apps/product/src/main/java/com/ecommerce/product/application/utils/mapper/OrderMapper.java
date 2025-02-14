package com.ecommerce.product.application.utils.mapper;

import com.ecommerce.product.application.utils.dto.OrderDto;
import com.ecommerce.product.repository.model.product.Order;

public class OrderMapper {
    public static OrderDto toDto(Order order) {
        if (order == null) {
            return null;
        }
        return OrderDto.builder()
                .id(order.getId())
                .userId(order.getUserId())
                .orderDate(DatetimeMapper.formatReleaseDate(order.getOrderDate()))
                .orderStatus(order.getOrderStatus())
                .address(order.getAddress())
                .payment(order.getPayment())
                .productList(order.getProductList().stream().map(OrderItemMapper::toDto).toList())
                .build();
    }

    public static Order toEntity(OrderDto orderDto) {
        if (orderDto == null) {
            return null;
        }
        return Order.builder()
                .id(orderDto.getId())
                .userId(orderDto.getUserId())
                .orderDate(DatetimeMapper.parseReleaseDate(orderDto.getOrderDate()))
                .orderStatus(orderDto.getOrderStatus())
                .address(orderDto.getAddress())
                .payment(orderDto.getPayment())
                .productList(orderDto.getProductList().stream().map(OrderItemMapper::toEntity).toList())
                .build();
    }
}
