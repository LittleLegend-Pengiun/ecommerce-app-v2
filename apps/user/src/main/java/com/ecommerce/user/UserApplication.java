package com.ecommerce.user;

import com.ecommerce.user.service.InitService;
import com.ecommerce.user.service.UserAccountService;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
public class UserApplication {
	@Autowired
	public InitService initService;

	public static void main(String[] args) {

		SpringApplication.run(UserApplication.class, args);
	}

	@PostConstruct
	public void init() {
		initService.cleanUpDb();
		initService.setupRoles();
	}
}
