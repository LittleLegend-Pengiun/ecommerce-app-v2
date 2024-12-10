package com.ecommerce.product.mapper;

import com.ecommerce.product.dto.CategoryDto;
import com.ecommerce.product.dto.ProductDto;
import com.ecommerce.product.model.Category;
import com.ecommerce.product.model.Product;

import java.util.List;

public class ProductMapper {
    public static ProductDto toDto(Product product) {
        if (product == null) {
            return null;
        }

        return ProductDto.builder()
                .id(product.getId())
                .productName(product.getProductName())
                .price(product.getPrice())
                .imageUrl(product.getImageUrl())
                .quantity(product.getQuantity())
                .manufacturer(product.getManufacturer())
                .releaseDate(product.getReleaseDate())
                .soldQuantity(product.getSoldQuantity())
                .categoryList(product.getCategoryList().stream().map(CategoryMapper::toDto).toList())
                .build();
    }

    public static Product toEntity(ProductDto dto) {
        if (dto == null) {
            return null;
        }

        return Product.builder()
                .id(dto.getId())
                .productName(dto.getProductName())
                .price(dto.getPrice())
                .imageUrl(dto.getImageUrl())
                .quantity(dto.getQuantity())
                .manufacturer(dto.getManufacturer())
                .releaseDate(dto.getReleaseDate())
                .soldQuantity(dto.getSoldQuantity())
                .categoryList(dto.getCategoryList().stream().map(CategoryMapper::toEntity).toList())
                .build();
    }
}