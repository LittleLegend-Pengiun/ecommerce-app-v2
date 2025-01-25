package com.ecommerce.product.controller;

import com.ecommerce.product.service.security.AuthTokenClaimService;
import jakarta.servlet.http.HttpServletRequest;
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
    private final AuthTokenClaimService authTokenClaimService;

    @GetMapping("")
    public ResponseEntity<String> authorizeToken(HttpServletRequest request) {
//        ResponseEntity<String> extResponse = authTokenClaimService.verifyToken(request);
//        String responseBody = extResponse.getBody();
        return ResponseEntity.status(HttpStatus.OK).body("Pass");
    }

}
