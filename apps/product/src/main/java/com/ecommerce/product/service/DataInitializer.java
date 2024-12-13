package com.ecommerce.product.service;

import com.ecommerce.product.model.Category;
import com.ecommerce.product.model.Product;
import com.ecommerce.product.repository.CategoryRepo;
import com.ecommerce.product.repository.ProductRepo;
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
    private final ProductRepo productRepo;
    private final CategoryRepo categoryRepo;

    public void cleanProductMSDB() {
        productRepo.deleteAll();
        categoryRepo.deleteAll();
    }

    @SuppressWarnings("null")
    public void initCategoryFromJson(String filePath) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        InputStream inputStream = getClass().getClassLoader().getResourceAsStream(filePath);
        List<Category> categories = mapper.readValue(inputStream, new TypeReference<List<Category>>(){});
        categoryRepo.saveAll(categories);
    }

    @SuppressWarnings("null")
    public void initProductFromJson(String filePath) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        InputStream inputStream = getClass().getClassLoader().getResourceAsStream(filePath);
        List<Product> products = mapper.readValue(inputStream, new TypeReference<List<Product>>(){});
        productRepo.saveAll(products);
    }
}
