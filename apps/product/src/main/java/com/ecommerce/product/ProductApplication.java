package com.ecommerce.product;

import com.ecommerce.product.service.DataInitializer;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.IOException;

@SpringBootApplication
public class ProductApplication implements CommandLineRunner {
	public static void main(String[] args) { SpringApplication.run(ProductApplication.class, args); }

	private final DataInitializer dataInitializer;

	public ProductApplication(DataInitializer dataInitializer) {
		this.dataInitializer = dataInitializer;
	}

	@Override
	public void run(String... args) throws IOException {
		dataInitializer.cleanProductMsDb();
		dataInitializer.initCategoryFromJson("category.json");
		dataInitializer.initProductFromJson("product.json");
	}
}
