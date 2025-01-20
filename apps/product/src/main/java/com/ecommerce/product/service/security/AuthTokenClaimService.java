package com.ecommerce.product.service.security;

import com.ecommerce.product.repository.AuthTokenClaimRepo;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.http.HttpStatus;

@Service
public class AuthTokenClaimService {
    private final AuthTokenClaimRepo authTokenClaimRepo;

    public AuthTokenClaimService(AuthTokenClaimRepo authTokenClaimRepo) {
        this.authTokenClaimRepo = authTokenClaimRepo;
    }

    public ResponseEntity<String> verifyToken(HttpServletRequest request) {
        String token = "";

        // Get the Authorization header
        String authorizationHeader = request.getHeader("Authorization");

        // Check if the header is present and starts with "Bearer"
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            // Extract the token by removing the "Bearer " prefix
            token = authorizationHeader.substring(7);
        }

        if (token.isEmpty()) {
            throw new IllegalArgumentException("Token is missing in the request header.");
        }

        String claimStr = authTokenClaimRepo.verifyTokenClaim(token);
        return ResponseEntity.status(HttpStatus.OK).body(claimStr);
    }
}
