package com.ecommerce.product.controller;

import com.ecommerce.product.application.response.GenericResponse;
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
    public ResponseEntity<GenericResponse> authorizeToken() {
        return new ResponseEntity<>(new GenericResponse("Pass"), HttpStatus.OK);
    }

}
