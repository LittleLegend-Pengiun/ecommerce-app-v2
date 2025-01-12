package com.ecommerce.user.controller;

import com.ecommerce.user.application.response.GenericResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@Validated
@RequiredArgsConstructor
@RestController
public class HealthController {

    @GetMapping("/")
    public ResponseEntity<GenericResponse> checkSystemHealth() {
        return new ResponseEntity<>(new GenericResponse("This is User microservice!"), HttpStatus.OK);
    }

    @GetMapping("/validated/health")
    public ResponseEntity<GenericResponse> checkSystemHealthWithValidation() {
        return new ResponseEntity<>(new GenericResponse("This is User microservice! User validated!"), HttpStatus.OK);
    }
}
