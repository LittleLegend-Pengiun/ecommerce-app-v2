package com.ecommerce.product.mapper;

import com.ecommerce.product.dto.CategoryDTO;
import com.ecommerce.product.dto.ProductDTO;
import com.ecommerce.product.model.Category;
import com.ecommerce.product.model.Product;

import java.util.List;

public class ProductMapper {
    public static ProductDTO toDTO(Product product) {
        if (product == null) {
            return null;
        }

        ProductDTO dto = new ProductDTO();
        dto.setId(product.getId());
        dto.setProductName(product.getProductName());
        dto.setPrice(product.getPrice());
        dto.setImageUrl(product.getImageUrl());
        dto.setQuantity(product.getQuantity());
        dto.setManufacturer(product.getManufacturer());
        dto.setReleaseDate(product.getReleaseDate());
        dto.setSoldQuantity(product.getSoldQuantity());

        List<CategoryDTO> categoryDTOs = product.getCategoryList().stream().map(CategoryMapper::toDTO).toList();
        dto.setCategoryList(categoryDTOs);
        return dto;
    }

    public static Product toEntity(ProductDTO dto) {
        if (dto == null) {
            return null;
        }

        Product product = new Product();
        product.setId(dto.getId());
        product.setProductName(dto.getProductName());
        product.setPrice(dto.getPrice());
        product.setImageUrl(dto.getImageUrl());
        product.setQuantity(dto.getQuantity());
        product.setManufacturer(dto.getManufacturer());
        product.setReleaseDate(dto.getReleaseDate());
        product.setSoldQuantity(dto.getSoldQuantity());

        List<Category> categories = dto.getCategoryList().stream().map(CategoryMapper::toEntity).toList();
        product.setCategoryList(categories);
        return product;
    }
}