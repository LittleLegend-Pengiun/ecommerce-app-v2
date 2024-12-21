package com.ecommerce.product;

import com.ecommerce.product.service.DataInitializer;
import jakarta.annotation.PostConstruct;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

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
