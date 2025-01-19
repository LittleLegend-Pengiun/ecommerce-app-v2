package com.ecommerce.product.service.security;

import com.ecommerce.product.application.request.VerifyTokenRequest;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpEntity;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;

@Service
public class VerifyTokenService {
    public ResponseEntity<String> verifyToken(HttpServletRequest request) {
        String token = "";

        // Get the Authorization header
        String authorizationHeader = request.getHeader("Authorization");

        // Check if the header is present and starts with "Bearer"
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            // Extract the token by removing the "Bearer " prefix
            token = authorizationHeader.substring(7);
        }

        if (token == null || token.isEmpty()) {
            throw new IllegalArgumentException("Token is missing in the request header.");
        }

        RestTemplate restTemplate = new RestTemplate();
        String userServiceUrl = "http://localhost:8001/services/jwt-decode";
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        String requestBody = String.format("{\"token\": \"%s\"}", token);
        HttpEntity<String> entity = new HttpEntity<>(requestBody, headers);

        try {
            ResponseEntity<String> response = restTemplate.postForEntity(userServiceUrl, entity, String.class);
            if (response.getStatusCode() == HttpStatus.OK) {
                return response;
            } else {
                throw new RuntimeException("Invalid token response from user service.");
            }
        } catch (Exception e) {
            throw new RuntimeException("Unexpected error while verifying token.", e);
        }
    }
}
