package com.ecommerce.product.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.List;

@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name="product")
public class Product {
    @Id
    @GeneratedValue( strategy= GenerationType.AUTO )
    private Integer id;
    private String productName;
    private String description;
    private Float price;
    private String imageUrl;
    private Integer quantity;
    private String manufacturer;
    private String releaseDate;
    private Integer soldQuantity;
    @ManyToMany
    @JoinTable(
            name="product_category",
            joinColumns = @JoinColumn(name="product_id"),
            inverseJoinColumns = @JoinColumn(name="author_id")
    )
    private List<Category> categoryList;
}
