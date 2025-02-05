package com.ecommerce.product.repository.model.user;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import lombok.experimental.SuperBuilder;

import java.util.List;

@SuperBuilder
@Getter
@Setter
@ToString
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
public class UserClaim {
    @Setter(AccessLevel.NONE)
    private Long sub;

    @NotNull
    @NotEmpty
    private String name;

    @NotNull
    @NotEmpty
    private List<String> roles;

    @NotNull
    @NotEmpty
    private Long iat;

    @NotNull
    @NotEmpty
    private Long exp;
}
