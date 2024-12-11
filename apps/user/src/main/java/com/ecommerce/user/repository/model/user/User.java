package com.ecommerce.user.repository.model.user;

import java.time.LocalDate;
import java.time.ZonedDateTime;

import org.checkerframework.common.aliasing.qual.Unique;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Entity
@SuperBuilder
@Table(name = "user")
@Data // equals ToString, Getter, Setter, EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull
    @Unique
    private String username;

    @NotNull
    private String password;

    private String fullName;

    private String address;

    private String phoneNumber;

    private LocalDate dateOfBirth;

    private Gender gender;

    private ZonedDateTime updatedAt;

    private ZonedDateTime createdAt;
}
