package com.ecommerce.user.controller;

import com.ecommerce.user.application.request.JwtDecodeRequest;
import com.ecommerce.user.application.response.JwtDecodeResponse;
import com.ecommerce.user.service.JwtService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@Validated
@RequiredArgsConstructor
@RestController
public class ServiceController {
    private final JwtService jwtService;

    @PostMapping("/services/jwt-decode")
    public ResponseEntity<JwtDecodeResponse> decodeJwtToken(@Valid @RequestBody JwtDecodeRequest request) {
        return new ResponseEntity<>(jwtService.decodeToken(request), HttpStatus.OK);
    }
}
