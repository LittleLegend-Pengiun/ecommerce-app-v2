package com.ecommerce.user.controller;

import com.ecommerce.user.application.request.LoginRequest;
import com.ecommerce.user.application.request.SignUpRequest;
import com.ecommerce.user.application.response.GenericResponse;
import com.ecommerce.user.application.response.JwtTokenResponse;
import com.ecommerce.user.service.UserAccountService;
import com.ecommerce.user.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@Slf4j
@Validated
@RequiredArgsConstructor
@RestController
public class UserController {
    private final UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<GenericResponse> signUpNewUser(
            @Valid @RequestBody final SignUpRequest signUpRequest
    ) {
        return new ResponseEntity<>(userService.createNewUser(signUpRequest), HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<JwtTokenResponse> loginAccount(
            @Valid @RequestBody final LoginRequest loginRequest
    ) {
        return new ResponseEntity<>(userService.authenticateAndGetToken(loginRequest), HttpStatus.ACCEPTED);
    }
}
