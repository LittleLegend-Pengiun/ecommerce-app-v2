package com.ecommerce.product.application.security;

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

    @Override
    protected void doFilterInternal(
            HttpServletRequest request, HttpServletResponse response, FilterChain filterChain
    ) throws ServletException, IOException {
        try {
            filterChain.doFilter(request, response);
            /**
             * VerifyTokenService.validate(...)
             */
        } catch (ServletException | IOException e) {
            throw e;
        } catch (Exception e) {
            log.error("ExternalAuthFilter Exception type: {}", e.getClass().getName());
            handlerExceptionResolver.resolveException(request, response, null, e); // Forward the exception to the GlobalExceptionHandler
        }
    }
}
