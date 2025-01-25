package com.ecommerce.product.application.security;

import com.ecommerce.product.application.exception.BadRequestException;
import com.ecommerce.product.service.security.AuthTokenClaimService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.servlet.HandlerExceptionResolver;

import java.io.IOException;

@Component
@RequiredArgsConstructor
@Slf4j
public class ExternalAuthFilter extends OncePerRequestFilter {
    private final HandlerExceptionResolver handlerExceptionResolver;
    private final AuthTokenClaimService authTokenClaimService;

    @Override
    protected void doFilterInternal(
            HttpServletRequest request, HttpServletResponse response, FilterChain filterChain
    ) throws ServletException, IOException {
        try {
            authTokenClaimService.verifyToken(request);
            filterChain.doFilter(request, response);
        } catch (Exception e) {
            log.error("ExternalAuthFilter Exception Message: {}", e.getMessage());
            BadRequestException badRequestException = new BadRequestException(e.getMessage());
            handlerExceptionResolver.resolveException(request, response, null, badRequestException); // Forward the exception to the GlobalExceptionHandler
        }
    }
}
