package com.ntnu.idatt2105.api.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class GetUserCalculationParams {
    private int page;
    private int size;
    private String username;
}
