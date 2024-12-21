package com.ecommerce.user;

import com.ecommerce.user.service.InitService;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

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
