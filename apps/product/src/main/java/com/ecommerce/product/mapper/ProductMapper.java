package com.ecommerce.product.mapper;

import com.ecommerce.product.dto.CategoryDto;
import com.ecommerce.product.dto.ProductDto;
import com.ecommerce.product.model.Category;
import com.ecommerce.product.model.Product;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.*;
import java.time.format.DateTimeFormatter;
import java.util.List;

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
                .releaseDate(formatReleaseDate(product.getReleaseDate()))
                .soldQuantity(product.getSoldQuantity())
                .categoryList(product.getCategoryList().stream().map(CategoryMapper::toDto).toList())
                .build();
    }

    public static String formatReleaseDate(ZonedDateTime zdt) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
        LocalDateTime ldt = zdt.toLocalDateTime();
        return ldt.format(formatter);
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
                .releaseDate(parseReleaseDate(dto.getReleaseDate()))
                .soldQuantity(dto.getSoldQuantity())
                .categoryList(dto.getCategoryList().stream().map(CategoryMapper::toEntity).toList())
                .build();
    }

    public static ZonedDateTime parseReleaseDate(String dateString) {
        dateString = dateString.replaceAll("/","-");
        String [] dateParts = dateString.split("-");
        String day = dateParts[0];
        String month = dateParts[1];
        String year = dateParts[2];
        return ZonedDateTime.of(Integer.parseInt(year), Integer.parseInt(month), Integer.parseInt(day), 0, 0, 0, 0, ZoneId.of("Asia/Ho_Chi_Minh"));
    }
}