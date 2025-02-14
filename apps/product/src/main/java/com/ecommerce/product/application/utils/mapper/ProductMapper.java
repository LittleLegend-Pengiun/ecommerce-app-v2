package com.ecommerce.product.application.utils.mapper;

import com.ecommerce.product.application.utils.dto.ProductDto;
import com.ecommerce.product.repository.model.product.Product;

import java.time.*;
import java.time.format.DateTimeFormatter;

public class ProductMapper {
    public static ProductDto toDto(Product product) {
        if (product == null) {
            return null;
        }

        return ProductDto.builder()
                .id(product.getId())
                .productName(product.getProductName())
                .description(product.getDescription())
                .price(product.getPrice())
                .imageUrl(product.getImageUrl())
                .quantity(product.getQuantity())
                .manufacturer(product.getManufacturer())
                .releaseDate(DatetimeMapper.formatReleaseDate(product.getReleaseDate()))
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
                .description(dto.getDescription())
                .price(dto.getPrice())
                .imageUrl(dto.getImageUrl())
                .quantity(dto.getQuantity())
                .manufacturer(dto.getManufacturer())
                .releaseDate(DatetimeMapper.parseReleaseDate(dto.getReleaseDate()))
                .soldQuantity(dto.getSoldQuantity())
                .categoryList(dto.getCategoryList().stream().map(CategoryMapper::toEntity).toList())
                .build();
    }
}