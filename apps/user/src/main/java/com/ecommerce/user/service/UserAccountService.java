package com.ecommerce.user.service;

import com.ecommerce.user.application.exeption.BadRequestException;
import com.ecommerce.user.application.exeption.NotFoundException;
import com.ecommerce.user.application.request.SignUpRequest;
import com.ecommerce.user.application.response.GenericResponse;
import com.ecommerce.user.application.utils.DateTimeUtils;
import com.ecommerce.user.repository.RoleRepository;
import com.ecommerce.user.repository.model.user.Gender;
import com.ecommerce.user.repository.model.user.UserRole;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ecommerce.user.repository.UserRepository;
import com.ecommerce.user.repository.model.user.Users;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.time.LocalDate;
import java.time.ZonedDateTime;
import java.util.Collections;
import java.util.Set;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
@Slf4j
public class UserAccountService implements UserDetailsService {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

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

        UserRole roles = roleRepository.findByRoleName("normal").orElse(null);


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

}
