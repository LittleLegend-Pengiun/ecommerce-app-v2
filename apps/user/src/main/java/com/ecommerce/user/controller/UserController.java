package com.ecommerce.user.controller;

import com.ecommerce.user.application.request.SignUpRequest;
import com.ecommerce.user.application.response.GenericResponse;
import com.ecommerce.user.service.UserAccountService;
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
    private final UserAccountService userAccountService;

    @PostMapping("/signup")
    public ResponseEntity<GenericResponse> signUpNewUser(
            @Valid @RequestBody final SignUpRequest signUpRequest
    ) {
        return new ResponseEntity<>(userAccountService.createNewUser(signUpRequest), HttpStatus.CREATED);
    }
}
