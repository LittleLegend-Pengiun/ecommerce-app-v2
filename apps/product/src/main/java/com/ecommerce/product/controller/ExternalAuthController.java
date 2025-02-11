package com.ecommerce.product.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@Validated
public class ExternalAuthController {
    @GetMapping("")
    public ResponseEntity<String> authorizeToken() {
        return ResponseEntity.status(HttpStatus.OK).body("Pass");
    }

}
