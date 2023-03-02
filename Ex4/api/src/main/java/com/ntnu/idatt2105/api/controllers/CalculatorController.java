package com.ntnu.idatt2105.api.controllers;

import com.ntnu.idatt2105.api.models.CalculationParams;
import com.ntnu.idatt2105.api.services.CalculatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "https://idatt2105-ex4.vercel.app")
public class CalculatorController {

    @Autowired
    private CalculatorService calculatorService;

    @RequestMapping("/add")
    @ResponseStatus(HttpStatus.OK)
    public double add(@RequestBody CalculationParams calculationParams) {
        return calculatorService.add(calculationParams.getA(), calculationParams.getB());
    }

    @RequestMapping("/subtract")
    @ResponseStatus(HttpStatus.OK)
    public double subtract(@RequestBody CalculationParams calculationParams) {
        return calculatorService.subtract(calculationParams.getA(), calculationParams.getB());
    }

    @RequestMapping("/multiply")
    @ResponseStatus(HttpStatus.OK)
    public double multiply(@RequestBody CalculationParams calculationParams) {
        return calculatorService.multiply(calculationParams.getA(), calculationParams.getB());
    }

    @RequestMapping("/divide")
    @ResponseStatus(HttpStatus.OK)
    public double divide(@RequestBody CalculationParams calculationParams) {
        return calculatorService.divide(calculationParams.getA(), calculationParams.getB());
    }

}
