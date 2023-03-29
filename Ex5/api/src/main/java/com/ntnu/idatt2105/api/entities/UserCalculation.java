package com.ntnu.idatt2105.api.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "user_calculation")
public class UserCalculation {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private double a;

    private double b;

    private double result;

    @Enumerated(EnumType.STRING)
    private CalculationEnum calculationType;

    private String username;

}
