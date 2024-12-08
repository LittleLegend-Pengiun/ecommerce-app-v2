package com.ecommerce.product.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name="category")
public class Category {
    @Id
    @GeneratedValue( strategy= GenerationType.AUTO )
    private Integer id;
    private String name;
}
