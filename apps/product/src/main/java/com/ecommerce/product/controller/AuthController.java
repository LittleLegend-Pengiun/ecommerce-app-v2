package com.ecommerce.product.controller;

import com.ecommerce.product.repository.dto.CategoryDto;
import com.ecommerce.product.service.security.VerifyTokenService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@Validated
public class AuthController {
    private final VerifyTokenService verifyTokenService;

    @GetMapping("")
    public ResponseEntity<String> getAllCategories(HttpServletRequest request) {
        ResponseEntity<String> extResponse = verifyTokenService.verifyToken(request);
        String responseBody = extResponse.getBody();
        return ResponseEntity.status(HttpStatus.OK).body(responseBody);
    }

}
