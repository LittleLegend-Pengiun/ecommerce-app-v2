package com.ecommerce.user.controller;

import com.ecommerce.user.application.request.JwtDecodeRequest;
import com.ecommerce.user.application.request.TestKafkaRequest;
import com.ecommerce.user.application.response.GenericResponse;
import com.ecommerce.user.application.response.JwtDecodeResponse;
import com.ecommerce.user.kafka.producer.TestProducer;
import com.ecommerce.user.service.JwtService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@Validated
@RequiredArgsConstructor
@RestController
public class HealthAndServiceController {
    private final JwtService jwtService;

    private final TestProducer testProducer;

    @GetMapping("/")
    public ResponseEntity<GenericResponse> checkSystemHealth() {
        return new ResponseEntity<>(new GenericResponse("This is User microservice!"), HttpStatus.OK);
    }

    @GetMapping("/validated/health")
    public ResponseEntity<GenericResponse> checkSystemHealthWithValidation() {
        return new ResponseEntity<>(new GenericResponse("This is User microservice! User validated!"), HttpStatus.OK);
    }

    @PostMapping("/services/jwt-decode")
    public ResponseEntity<JwtDecodeResponse> decodeJwtToken(@Valid @RequestBody JwtDecodeRequest request) {
        return new ResponseEntity<>(jwtService.decodeToken(request), HttpStatus.OK);
    }

    @PostMapping("/services/test-kafka")
    public ResponseEntity<GenericResponse> publishKafkaMessage(@Valid @RequestBody TestKafkaRequest request) {
        testProducer.sendMessage("test-topic", request.getMessage());
        return new ResponseEntity<>(new GenericResponse("Message sent"), HttpStatus.OK);
    }
}
