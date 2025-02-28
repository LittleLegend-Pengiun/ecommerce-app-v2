package com.ecommerce.product.repository.model.product;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.time.ZonedDateTime;
import java.util.List;

@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name="`order`")
public class Order {
    @Id
    @GeneratedValue( strategy= GenerationType.AUTO )
    private Integer id;
    private Integer userId;

    @Temporal(TemporalType.TIMESTAMP)
    private ZonedDateTime orderDate;

    @NotEmpty
    private String orderStatus;

    @NotEmpty
    private String address;

    @NotEmpty
    private String payment;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    List<OrderItem> productList;
}
