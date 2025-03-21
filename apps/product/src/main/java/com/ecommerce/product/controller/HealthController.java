package com.ecommerce.product.controller;

import com.ecommerce.product.application.kafka.producer.TestProducer;
import com.ecommerce.product.application.request.TestKafkaRequest;
import com.ecommerce.product.application.response.GenericResponse;
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
public class HealthController {
    private final TestProducer testProducer;

    @GetMapping("/")
    public ResponseEntity<GenericResponse> checkSystemHealth() {
        return new ResponseEntity<>(new GenericResponse("This is Product microservice!"), HttpStatus.OK);
    }

    @PostMapping("/services/test-kafka")
    public ResponseEntity<GenericResponse> publishKafkaMessage(@Valid @RequestBody TestKafkaRequest request) {
        testProducer.sendMessage("test-topic", request.getMessage());
        return new ResponseEntity<>(new GenericResponse("Message sent"), HttpStatus.OK);
    }
}
