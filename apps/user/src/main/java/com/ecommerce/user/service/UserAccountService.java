package com.ecommerce.user.service;

import com.ecommerce.user.application.request.SignUpRequest;
import com.ecommerce.user.application.response.GenericResponse;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.ecommerce.user.repository.UserRepository;
import com.ecommerce.user.repository.model.user.Users;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.util.Set;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
@Slf4j
public class UserAccountService implements UserDetailsService {
    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("Username not found"));

        Set<GrantedAuthority> authorities = user
                .getUserRoles()
                .stream()
                .map((role) -> new SimpleGrantedAuthority(role.getRoleName())).collect(Collectors.toSet());

        return new org.springframework.security.core.userdetails.User(user.getUsername(),
                user.getPassword(),
                authorities);
    }

    public GenericResponse createNewUser(SignUpRequest request) {

        return GenericResponse.builder().message("Account created").build();
    }

}
