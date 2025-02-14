package com.ecommerce.product.application.utils.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.List;

@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class OrderDto {
    private Integer id;

    private Integer userId;

    @NotEmpty
    @Pattern(regexp = "^[0-9]{2}[/-][0-9]{2}[/-][0-9]{4}$")
    private String orderDate;

    @NotEmpty
    private String orderStatus;

    @NotEmpty
    private String address;

    @NotEmpty
    private String payment;

    @Valid
    private List<OrderItemDto> productList;
}
