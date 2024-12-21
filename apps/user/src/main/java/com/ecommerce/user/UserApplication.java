package com.ecommerce.user;

import com.ecommerce.user.service.InitService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.IOException;

@SpringBootApplication
public class UserApplication implements CommandLineRunner {
	public static void main(String[] args) { SpringApplication.run(UserApplication.class, args); }

	private final InitService initService;

	public UserApplication(InitService initService) {
		this.initService = initService;
	}

	@Override
	public void run(String... args) throws IOException {
		initService.cleanUpDb();
		initService.setupRoles();
	}
}
