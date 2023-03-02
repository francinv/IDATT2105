package com.ntnu.idatt2105.api.models;

public class CalculationParams {
    private final double a;
    private final double b;

    CalculationParams(double a, double b) {
        this.a = a;
        this.b = b;
    }

    public double getA() {
        return a;
    }

    public double getB() {
        return b;
    }
}
