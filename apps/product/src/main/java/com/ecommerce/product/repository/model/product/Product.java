package com.ecommerce.product.repository.model.product;

import jakarta.persistence.*;
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
    @Temporal(TemporalType.TIMESTAMP)
    private ZonedDateTime releaseDate;
    private Integer soldQuantity;
    @ManyToMany
    @JoinTable(
            name="product_category",
            joinColumns = @JoinColumn(name="product_id"),
            inverseJoinColumns = @JoinColumn(name="category_id")
    )
    private List<Category> categoryList;
}
