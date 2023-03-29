package com.ntnu.idatt2105.api.services;

import com.ntnu.idatt2105.api.entities.CalculationEnum;
import com.ntnu.idatt2105.api.models.CreateUserCalculationParams;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CalculatorService {

    Logger logger = LoggerFactory.getLogger(CalculatorService.class);

    private final UserCalculationsService userCalculationsService;

    public Double add(double a, double b, String requestingUsername) {
        logger.info("Adding {} and {}", a, b);
        var result = a + b;
        userCalculationsService.save(
            CreateUserCalculationParams
                .builder()
                .username(requestingUsername)
                .calculationType(CalculationEnum.ADDITION)
                .firstNumber(a)
                .secondNumber(b)
                .result(result)
            .build()
        );

        return result;
    }

    public Double subtract(double a, double b, String requestingUsername) {
        logger.info("Subtracting {} and {}", a, b);
        var result = a - b;

        userCalculationsService.save(
            CreateUserCalculationParams
                .builder()
                .username(requestingUsername)
                .calculationType(CalculationEnum.SUBTRACTION)
                .firstNumber(a)
                .secondNumber(b)
                .result(result)
            .build()
        );

        return result;
    }

    public Double multiply(double a, double b, String requestingUsername) {
        logger.info("Multiplying {} and {}", a, b);
        var result = a * b;

        userCalculationsService.save(
            CreateUserCalculationParams
                .builder()
                .username(requestingUsername)
                .calculationType(CalculationEnum.MULTIPLICATION)
                .firstNumber(a)
                .secondNumber(b)
                .result(result)
            .build()
        );

        return result;
    }

    public Double divide(double a, double b, String requestingUsername) {
        logger.info("Dividing {} and {}", a, b);
        var result = a / b;

        userCalculationsService.save(
            CreateUserCalculationParams
                .builder()
                .username(requestingUsername)
                .calculationType(CalculationEnum.DIVISION)
                .firstNumber(a)
                .secondNumber(b)
                .result(result)
            .build()
        );

        return result;
    }
}
