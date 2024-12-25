package com.ecommerce.user.application.entity;

import com.ecommerce.user.repository.model.user.UserRole;
import com.ecommerce.user.repository.model.user.Users;

import java.util.HashMap;
import java.util.List;

public class JwtPayload {
    private final String subject;
    private final String name;
    private final List<String> roles;

    public JwtPayload(Users user) {
        subject = user.getId().toString();
        name = user.getUsername();
        roles = user.getUserRoles().stream().map(UserRole::getRoleName).toList();
    }

    public HashMap<String, Object> getPayload() {
        HashMap<String, Object> payload = new HashMap<>();
        payload.put("sub", subject);
        payload.put("name", name);
        payload.put("roles", roles);
        return payload;
    }
}
