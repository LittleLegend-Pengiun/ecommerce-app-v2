package com.ecommerce.product.repository.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.List;

@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class ProductDto {
    private Integer id;
    @NotEmpty
    private String productName;
    @NotEmpty
    private String description;
    @DecimalMin(value = "1000.0")
    @DecimalMax(value = "10000000000.0")
    private Float price;
    @NotEmpty
    private String imageUrl;
    @Digits(integer = 10, fraction = 0)
    private Integer quantity;
    @NotEmpty
    private String manufacturer;
    @Pattern(regexp = "^[0-9]{2}[/-][0-9]{2}[/-][0-9]{4}$")
    private String releaseDate;
    @Digits(integer = 10, fraction = 0)
    private Integer soldQuantity;
    @Valid
    private List<CategoryDto> categoryList;
}
