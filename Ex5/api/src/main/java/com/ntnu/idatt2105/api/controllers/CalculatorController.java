package com.ntnu.idatt2105.api.controllers;

import com.ntnu.idatt2105.api.models.CalculationParams;
import com.ntnu.idatt2105.api.services.CalculatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/calculator")
@CrossOrigin(origins = {"https://idatt2105-ex5.vercel.app/", "http://127.0.0.1:5173"})
public class CalculatorController {

    @Autowired
    private CalculatorService calculatorService;

    @PostMapping("/add")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Double> add(@RequestBody CalculationParams calculationParams) {
        return ResponseEntity.ok(
                calculatorService.add(
                    calculationParams.getA(),
                    calculationParams.getB(),
                    calculationParams.getRequestingUsername()
                )
        );
    }

    @PostMapping("/subtract")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Double> subtract(@RequestBody CalculationParams calculationParams) {
        return ResponseEntity.ok(
            calculatorService.subtract(
                calculationParams.getA(),
                calculationParams.getB(),
                calculationParams.getRequestingUsername()
            )
        );
    }

    @PostMapping("/multiply")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Double> multiply(@RequestBody CalculationParams calculationParams) {
        return ResponseEntity.ok(
            calculatorService.multiply(
                calculationParams.getA(),
                calculationParams.getB(),
                calculationParams.getRequestingUsername()
            )
        );
    }

    @PostMapping("/divide")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Double> divide(@RequestBody CalculationParams calculationParams) {
        return ResponseEntity.ok(
            calculatorService.divide(
                calculationParams.getA(),
                calculationParams.getB(),
                calculationParams.getRequestingUsername()
            )
        );
    }
}
