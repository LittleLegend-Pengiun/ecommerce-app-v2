package com.ecommerce.product;

import com.ecommerce.product.service.DataInitializer;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import java.io.IOException;

@SpringBootApplication
@ComponentScan(basePackages="com.ecommerce.product")
@EntityScan(basePackages="com.ecommerce.product")
@EnableAutoConfiguration
@EnableJpaRepositories(basePackages = "com.ecommerce.product")
public class ProductApplication {
	@Autowired
	public DataInitializer dataInitializer;

	public static void main(String[] args) {
		SpringApplication.run(ProductApplication.class, args);
	}

	@PostConstruct
	public void init() throws IOException {
		dataInitializer.cleanProductMSDB();
		dataInitializer.initCategoryFromJson("category.json");
		dataInitializer.initProductFromJson("product.json");
	}
}
