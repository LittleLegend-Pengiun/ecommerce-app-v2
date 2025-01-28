package com.ecommerce.product.service.security;

import com.ecommerce.product.application.security.CustomUserDetails;
import com.ecommerce.product.repository.ExternalJwtClaimRepo;
import com.ecommerce.product.repository.model.user.UserClaim;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Service;

@Service
public class ExternalJwtClaimService {
    private final ExternalJwtClaimRepo externalJwtClaimRepo;

    public ExternalJwtClaimService(ExternalJwtClaimRepo externalJwtClaimRepo) {
        this.externalJwtClaimRepo = externalJwtClaimRepo;
    }

    public CustomUserDetails verifyTokenClaim(HttpServletRequest request) {
        String token = "";
        String authorizationHeader = request.getHeader("Authorization");
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            token = authorizationHeader.substring(7);
        }

        if (token.isEmpty()) {
            throw new IllegalArgumentException("Token is missing in the request header.");
        }

        UserClaim user = externalJwtClaimRepo.verifyTokenClaim(token);
        return new CustomUserDetails(user);
    }
}
