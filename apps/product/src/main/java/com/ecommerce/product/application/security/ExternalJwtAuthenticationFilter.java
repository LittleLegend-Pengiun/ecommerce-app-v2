package com.ecommerce.product.application.security;

import com.ecommerce.product.application.exception.BadRequestException;
import com.ecommerce.product.service.security.ExternalJwtClaimService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.AntPathMatcher;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.servlet.HandlerExceptionResolver;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

@Component
@RequiredArgsConstructor
@Slf4j
public class ExternalJwtAuthenticationFilter extends OncePerRequestFilter {
    private final HandlerExceptionResolver handlerExceptionResolver;
    private final ExternalJwtClaimService externalJwtClaimService;

    private final AntPathMatcher pathMatcher = new AntPathMatcher();
    private final Set<String> skipUrls = new HashSet<>(Arrays.asList("/product/**","/category/**"));

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) {
        return skipUrls.stream().anyMatch(s -> pathMatcher.match(s, request.getRequestURI()));
    }

    @Override
    protected void doFilterInternal(
            HttpServletRequest request, HttpServletResponse response, FilterChain filterChain
    ){
        try {
            checkAuthorizationToken(request);
            filterChain.doFilter(request, response);
        } catch (Exception e) {
          log.error("ExternalAuthFilter Exception Message: {}", e.getMessage());
            BadRequestException badRequestException = new BadRequestException(e.getMessage());
            handlerExceptionResolver.resolveException(request, response, null, badRequestException); // Forward the exception to the GlobalExceptionHandler
        }
    }

    private void checkAuthorizationToken(HttpServletRequest request) {
        CustomUserDetails userDetails = externalJwtClaimService.verifyTokenClaim(request);
        if (SecurityContextHolder.getContext().getAuthentication() == null) {
            UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                    userDetails, null, userDetails.getAuthorities()
            );
            authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
            SecurityContextHolder.getContext().setAuthentication(authToken);
        }
    }
}
