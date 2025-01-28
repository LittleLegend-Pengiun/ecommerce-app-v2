package com.ecommerce.product.repository;

import com.ecommerce.product.repository.model.user.UserClaim;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.*;
import org.springframework.stereotype.Repository;
import org.springframework.web.client.RestTemplate;

@Repository
public class ExternalJwtClaimRepo {
    private final RestTemplate restTemplate;

    public ExternalJwtClaimRepo(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public UserClaim verifyTokenClaim(String token) {
        String userMSUrl = "http://localhost:8001/services/jwt-decode";
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        String requestBody = String.format("{\"token\": \"%s\"}", token);
        HttpEntity<String> entity = new HttpEntity<>(requestBody, headers);

        try {
            ResponseEntity<String> response = restTemplate.postForEntity(userMSUrl, entity, String.class);
            if (response.getStatusCode() == HttpStatus.OK) {
                return extractUserFromJson(response.getBody());
            } else {
                throw new RuntimeException("Invalid token response from user service.");
            }
        } catch (Exception e) {
            throw new RuntimeException("User M/S response error: Unexpected error while verifying token.", e);
        }
    }

    UserClaim extractUserFromJson(String json) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        JsonNode root = mapper.readTree(json);
        JsonNode payload = root.get("payload");
        return mapper.readValue(payload.toString(), UserClaim.class);
    }
}
