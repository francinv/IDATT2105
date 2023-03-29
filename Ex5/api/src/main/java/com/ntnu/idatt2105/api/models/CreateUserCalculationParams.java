package com.ntnu.idatt2105.api.models;

import com.ntnu.idatt2105.api.entities.CalculationEnum;
import com.ntnu.idatt2105.api.entities.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CreateUserCalculationParams {
    private String username;
    private CalculationEnum calculationType;
    private double firstNumber;
    private double secondNumber;
    private double result;
}
