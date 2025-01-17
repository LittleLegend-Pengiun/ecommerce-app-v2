package com.ecommerce.user.service;

import com.ecommerce.user.repository.RoleRepository;
import com.ecommerce.user.repository.UserRepository;
import com.ecommerce.user.repository.model.user.UserRole;
import com.ecommerce.user.repository.model.user.Users;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
@RequiredArgsConstructor
public class InitService {
    private final RoleRepository roleRepository;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    public void cleanUpDb() {
        roleRepository.deleteAll();
        userRepository.deleteAll();
    }

    public void setupRoles() {
        var roles = new ArrayList<>(List.of(new String[]{"ROLE_ADMIN", "ROLE_USER"}));
        roles.forEach((role) -> {
            UserRole newRole = UserRole.builder().roleName(role).build();
            roleRepository.save(newRole);
        });
    }

    public void setupAdminUser() {
        UserRole roles = roleRepository.findByRoleName("ROLE_ADMIN").orElse(null);

        userRepository.save(Users.builder()
                .username("admin")
                .password(passwordEncoder.encode("1"))
                .userRoles(Collections.singleton(roles))
                .build());
    }
}
