package com.ecommerce.product.controller;


import com.ecommerce.product.application.request.CreateOrderRequest;
import com.ecommerce.product.application.response.OrderListResponse;
import com.ecommerce.product.application.response.OrderResponse;
import com.ecommerce.product.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/order")
@RequiredArgsConstructor
@Validated
public class OrderController {
    private final OrderService orderService;

    @GetMapping("/all")
    public ResponseEntity<OrderListResponse> getAllProducts() {
        return new ResponseEntity<>(orderService.getAllOrders(), HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<OrderResponse> createOrder(@RequestBody @Validated CreateOrderRequest createOrderRequest) {
        return new ResponseEntity<>(orderService.saveOrder(createOrderRequest), HttpStatus.OK);
    }
}
