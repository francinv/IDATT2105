package com.ntnu.idatt2105.api.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class CalculatorService {

    Logger logger = LoggerFactory.getLogger(CalculatorService.class);

    public double add(double a, double b) {
        logger.info("Adding {} and {}", a, b);
        return a + b;
    }

    public double subtract(double a, double b) {
        logger.info("Subtracting {} and {}", a, b);
        return a - b;
    }

    public double multiply(double a, double b) {
        logger.info("Multiplying {} and {}", a, b);
        return a * b;
    }

    public double divide(double a, double b) {
        logger.info("Dividing {} and {}", a, b);
        return a / b;
    }
}
