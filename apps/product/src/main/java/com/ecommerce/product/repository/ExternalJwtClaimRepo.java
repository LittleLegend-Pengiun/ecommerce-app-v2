package com.ecommerce.product.repository;

import com.ecommerce.product.application.exception.BadRequestException;
import com.ecommerce.product.application.response.GenericResponse;
import com.ecommerce.product.repository.model.user.UserClaim;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Repository;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Map;

@Repository
public class ExternalJwtClaimRepo {
    @Value("${external.microservice.user.url}")
    private String serviceUrl;

    @Value("${external.microservice.user.uri.token-verify}")
    private String verifyTokenUri;


    private final WebClient webClient;

    public ExternalJwtClaimRepo(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .build();
    }

    public UserClaim verifyTokenClaim(String token) {
        WebClient dynamicWebClient = webClient.mutate()
                .baseUrl(serviceUrl)
                .build();
        return dynamicWebClient.post().uri(verifyTokenUri)
                .bodyValue(Map.of("token", token))
                .retrieve()
                .onStatus(
                        HttpStatus.BAD_REQUEST::equals,
                        response -> response.bodyToMono(GenericResponse.class).map(object -> new BadRequestException("[user-ms-error-message](" + object.getMessage() + ")")))
                .bodyToMono(String.class)
                .map(this::extractUserFromJson)
                .block();
    }

    private UserClaim extractUserFromJson(String json){
        try {
            ObjectMapper mapper = new ObjectMapper();
            JsonNode root = mapper.readTree(json);
            JsonNode payload = root.get("payload");
            return mapper.readValue(payload.toString(), UserClaim.class);
        } catch (JsonProcessingException e) {
            throw new RuntimeException("Extracting UserClaim from json error:", e);
        }
    }
}
