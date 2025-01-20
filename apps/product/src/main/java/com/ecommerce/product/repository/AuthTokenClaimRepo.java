package com.ecommerce.product.repository;

import org.springframework.http.*;
import org.springframework.stereotype.Repository;
import org.springframework.web.client.RestTemplate;

@Repository
public class AuthTokenClaimRepo {
    private final RestTemplate restTemplate;

    public AuthTokenClaimRepo(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public String verifyTokenClaim(String token) {
        String userMSUrl = "http://localhost:8001/services/jwt-decode";
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        String requestBody = String.format("{\"token\": \"%s\"}", token);
        HttpEntity<String> entity = new HttpEntity<>(requestBody, headers);

        try {
            ResponseEntity<String> response = restTemplate.postForEntity(userMSUrl, entity, String.class);
            if (response.getStatusCode() == HttpStatus.OK) {
                return response.getBody();
            } else {
                throw new RuntimeException("Invalid token response from user service.");
            }
        } catch (Exception e) {
            throw new RuntimeException("Unexpected error while verifying token.", e);
        }
    }
}
