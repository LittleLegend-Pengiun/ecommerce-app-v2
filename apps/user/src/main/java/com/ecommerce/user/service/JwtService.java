package com.ecommerce.user.service;

import com.ecommerce.user.application.entity.JwtPayload;
import com.ecommerce.user.repository.model.user.Users;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;

@Service
@Slf4j
public class JwtService {
    @Value("${infrastructure.jwt.secret}")
    private String jwtSecret;

    private String createToken(Users user) {
        int expireTime = 1000 * 60 * 30; // Token valid for 30 minutes
        JwtPayload payload = new JwtPayload(user);

        return Jwts.builder()
                .claims(payload.getPayload())
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + expireTime))
                .signWith(getSignKey(), Jwts.SIG.HS256)
                .compact();
    }

    private SecretKey getSignKey() {
        byte[] keyBytes = Decoders.BASE64.decode(jwtSecret);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}
