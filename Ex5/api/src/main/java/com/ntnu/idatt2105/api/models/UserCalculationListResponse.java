package com.ntnu.idatt2105.api.models;

import com.ntnu.idatt2105.api.entities.UserCalculation;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserCalculationListResponse {
    private int page;
    private long total;
    private int totalPages;
    private List<UserCalculation> userCalculations;
}
