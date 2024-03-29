package com.ntnu.idatt2105.api.models;

import com.ntnu.idatt2105.api.entities.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CalculationParams {
    private double a;
    private double b;
    private String requestingUsername;
}
