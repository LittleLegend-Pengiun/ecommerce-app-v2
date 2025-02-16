package com.ecommerce.product.service;

import com.ecommerce.product.application.response.OrderListResponse;
import com.ecommerce.product.application.response.OrderResponse;
import com.ecommerce.product.application.utils.dto.OrderDto;
import com.ecommerce.product.application.utils.mapper.OrderMapper;
import com.ecommerce.product.repository.OrderItemRepo;
import com.ecommerce.product.repository.OrderRepo;
import com.ecommerce.product.repository.model.product.Order;
import com.ecommerce.product.repository.model.product.OrderItem;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class OrderService {
    final private OrderItemRepo orderItemRepo;
    final private OrderRepo orderRepo;

    public void saveAllOrder(List<OrderDto> dtoList) {
        List<OrderResponse> savedOrders = dtoList.stream().map(this::saveOrder).toList();
    }

    public OrderListResponse getAllOrders() {
        List<Order> orders = orderRepo.findAll();
        List<OrderDto> orderDtos = orders.stream().map(OrderMapper::toDto).toList();
        return new OrderListResponse(orderDtos);
    }

    public OrderResponse saveOrder(OrderDto dto) {
        Order order = OrderMapper.toEntity(dto);
        order.getProductList().forEach(orderItem -> orderItem.setOrder(order));
        Order savedOrder = orderRepo.save(order);
        return new OrderResponse(OrderMapper.toDto(savedOrder));
    }
}
