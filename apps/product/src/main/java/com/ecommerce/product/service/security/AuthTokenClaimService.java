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

    public void verifyToken(HttpServletRequest request) {
        String token = "";
        String authorizationHeader = request.getHeader("Authorization");
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            token = authorizationHeader.substring(7);
        }

        if (token.isEmpty()) {
            throw new IllegalArgumentException("Token is missing in the request header.");
        }

        String claimStr = authTokenClaimRepo.verifyTokenClaim(token);
        ResponseEntity.status(HttpStatus.OK).body(claimStr);
    }
}
