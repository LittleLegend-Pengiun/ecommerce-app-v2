package com.ecommerce.product.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ProductDTO {
    private Integer id;
    private String productName;
    private Float price;
    private String imageUrl;
    private Integer quantity;
    private String manufacturer;
    private String releaseDate;
    private Integer soldQuantity;
    private List<CategoryDTO> categoryList;
}
