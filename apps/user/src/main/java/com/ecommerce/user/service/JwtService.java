package com.ecommerce.user.service;

import com.ecommerce.user.repository.model.user.UserRole;
import com.ecommerce.user.repository.model.user.Users;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.HashMap;

@Service
@Slf4j
public class JwtService {
    @Value("${infrastructure.jwt.secret}")
    private String jwtSecret;

    public String createToken(Users user) {
        int expireTime = 1000 * 60 * 30; // Token valid for 30 minutes
        var payload = createJwtPayload(user);

        return Jwts.builder()
                .claims(payload)
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + expireTime))
                .signWith(getSignKey(), Jwts.SIG.HS256)
                .compact();
    }

    // Extract the username from the token
    public String extractUsername(String token) {
        return extractAllClaims(token).get("name", String.class);
    }

    // Extract the expiration date from the token
    public Date extractExpiration(String token) {
        return extractAllClaims(token).getExpiration();
    }

    public boolean validateToken(String token, UserDetails userDetails) {
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }

    // Extract all claims from the token
    private Claims extractAllClaims(String token) {
        return Jwts.parser()
                .verifyWith(getSignKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }

    private SecretKey getSignKey() {
        byte[] keyBytes = Decoders.BASE64.decode(jwtSecret);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    // Check if the token is expired
    private Boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    private static HashMap<String, Object> createJwtPayload(Users user) {
        HashMap<String, Object> payload = new HashMap<>();
        payload.put("sub", user.getId().toString());
        payload.put("name", user.getUsername());
        payload.put("roles", user.getUserRoles().stream().map(UserRole::getRoleName).toList());
        return payload;
    }
}
