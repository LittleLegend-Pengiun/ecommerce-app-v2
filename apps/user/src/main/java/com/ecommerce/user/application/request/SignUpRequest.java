package com.ecommerce.user.application.request;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class SignUpRequest {
    @NotNull
    private String username;
    @NotNull
    private String password;
    private String email;
    private String fullname;
    private String address;

    private String phoneNumber;
    private String dateOfBirth;
    private String gender;
}
