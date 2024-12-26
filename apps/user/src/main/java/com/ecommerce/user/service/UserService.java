package com.ecommerce.user.service;

import com.ecommerce.user.application.exeption.BadRequestException;
import com.ecommerce.user.application.request.LoginRequest;
import com.ecommerce.user.application.request.SignUpRequest;
import com.ecommerce.user.application.response.GenericResponse;
import com.ecommerce.user.application.response.JwtTokenResponse;
import com.ecommerce.user.application.utils.DateTimeUtils;
import com.ecommerce.user.repository.RoleRepository;
import com.ecommerce.user.repository.UserRepository;
import com.ecommerce.user.repository.model.user.Gender;
import com.ecommerce.user.repository.model.user.UserRole;
import com.ecommerce.user.repository.model.user.Users;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.ZonedDateTime;
import java.util.Collections;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserService {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;


    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;

    public GenericResponse createNewUser(SignUpRequest request) throws RuntimeException {

        if (userRepository.existsByUsername(request.getUsername())) {
            throw new BadRequestException("Username already exists");
        }

        LocalDate dateOfBirth;
        Gender gender;

        try {
            dateOfBirth = DateTimeUtils.fromStringToLocalDate(request.getDateOfBirth());
            gender = Gender.valueOf(request.getGender());
        } catch (RuntimeException exception) {
            log.error("Error when parsing birthday and gender", exception);
            throw new BadRequestException("Invalid dateOfBirth or gender");
        }

        UserRole roles = roleRepository.findByRoleName("ROLE_USER").orElse(null);


        Users newUser = Users.builder()
                .username(request.getUsername())
                .password(passwordEncoder.encode(request.getPassword()))
                .email(request.getEmail())
                .address(request.getAddress())
                .phoneNumber(request.getPhoneNumber())
                .dateOfBirth(dateOfBirth)
                .gender(gender)
                .createdAt(ZonedDateTime.now())
                .updatedAt(ZonedDateTime.now())
                .userRoles(Collections.singleton(roles))
                .build();

        userRepository.save(newUser);

        return GenericResponse.builder().message("Account created").build();
    }

    public JwtTokenResponse authenticateAndGetToken(LoginRequest authRequest) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword())
            );

            if (authentication.isAuthenticated()) {
                log.info("User {} authenticated!", authRequest.getUsername());
                Users currentUser = userRepository.findByUsername(authRequest.getUsername()).orElseThrow();
                String token = jwtService.createToken(currentUser);
                return new JwtTokenResponse(token);
            } else {
                throw new UsernameNotFoundException("Invalid user request!");
            }
        } catch (AuthenticationException exp) {
            log.error("Cannot authenticate user {}", authRequest.getUsername());
            throw exp;
        }
    }
}
