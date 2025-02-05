package com.ecommerce.product.application.security;

import com.ecommerce.product.repository.model.user.UserClaim;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.List;
import java.util.stream.Collectors;

@Data
@AllArgsConstructor
public class CustomUserDetails implements UserDetails {
    private UserClaim userClaim;

    @Override
    public List<GrantedAuthority> getAuthorities() {
        return userClaim.getRoles().stream()
                .map(SimpleGrantedAuthority::new).collect(Collectors.toList());
    }

    @Override
    public String getPassword() {
        return "";
    }

    @Override
    public String getUsername() {
        return userClaim.getName();
    }

}
