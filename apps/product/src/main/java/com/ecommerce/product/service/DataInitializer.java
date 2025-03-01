package com.ecommerce.product.service;

import com.ecommerce.product.application.utils.dto.CategoryDto;
import com.ecommerce.product.application.utils.dto.OrderDto;
import com.ecommerce.product.application.utils.dto.OrderItemDto;
import com.ecommerce.product.application.utils.dto.ProductDto;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@RequiredArgsConstructor
@Service
public class DataInitializer {
    private final ProductService productService;
    private final CategoryService categoryService;
    private final OrderService orderService;

    public void cleanProductMsDb() {
        productService.deleteAll();
        categoryService.deleteAll();
    }

    @SuppressWarnings("null")
    public void initCategoryFromJson(String filePath) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        InputStream inputStream = getClass().getClassLoader().getResourceAsStream(filePath);
        List<CategoryDto> categoryDtos = mapper.readValue(inputStream, new TypeReference<List<CategoryDto>>(){});
        categoryService.saveAll(categoryDtos);
    }

    @SuppressWarnings("null")
    public void initProductFromJson(String filePath) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        InputStream inputStream = getClass().getClassLoader().getResourceAsStream(filePath);
        List<ProductDto> productDtos = mapper.readValue(inputStream, new TypeReference<List<ProductDto>>(){});
        productService.saveAll(productDtos);
    }

    public void initOrderFromJson(String filePath) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        InputStream inputStream = getClass().getClassLoader().getResourceAsStream(filePath);
        List<OrderDto> orderDtos = mapper.readValue(inputStream, new TypeReference<List<OrderDto>>(){});
        orderService.saveAllOrder(orderDtos);
    }
}
