package com.ecommerce.user.application.request;

import com.ecommerce.user.application.utils.DateTimeUtils;
import com.ecommerce.user.repository.model.user.Gender;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.Nulls;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDate;

@Data
public class SignUpRequest {
    @NotNull
    @NotEmpty
    private String username;

    @NotNull
    @NotEmpty
    private String password;
    private String email;
    private String fullname;
    private String address;
    private String phoneNumber;

    @JsonSetter(nulls = Nulls.SKIP)
    private String dateOfBirth = DateTimeUtils.fromLocalDateToString(LocalDate.now());

    @JsonSetter(nulls = Nulls.SKIP)
    private String gender = String.valueOf(Gender.MALE);
}
