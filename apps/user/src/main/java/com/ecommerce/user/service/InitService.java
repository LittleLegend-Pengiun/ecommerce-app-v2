package com.ecommerce.user.service;

import com.ecommerce.user.repository.RoleRepository;
import com.ecommerce.user.repository.UserRepository;
import com.ecommerce.user.repository.model.user.UserRole;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class InitService {
    private final RoleRepository roleRepository;
    private final UserRepository userRepository;

    public void cleanUpDb() {
        roleRepository.deleteAll();
        userRepository.deleteAll();
    }

    public void setupRoles() {
        var roles = new ArrayList<>(List.of(new String[]{"admin", "normal"}));
        roles.forEach((role) -> {
            UserRole newRole = UserRole.builder().roleName(role).build();
            roleRepository.save(newRole);
        });
    }
}
