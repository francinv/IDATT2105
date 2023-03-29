package com.ntnu.idatt2105.api.services;

import com.ntnu.idatt2105.api.entities.UserCalculation;
import com.ntnu.idatt2105.api.models.CreateUserCalculationParams;
import com.ntnu.idatt2105.api.models.GetUserCalculationParams;
import com.ntnu.idatt2105.api.models.UserCalculationListResponse;
import com.ntnu.idatt2105.api.repositories.UserCalculationRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
@RequiredArgsConstructor
public class UserCalculationsService {
    private final UserCalculationRepository userCalculationRepository;
    Logger logger = LoggerFactory.getLogger(UserCalculationsService.class);

    public UserCalculation save(CreateUserCalculationParams createUserCalculationParams) {
        return userCalculationRepository.save(
            UserCalculation.builder()
                .a(createUserCalculationParams.getFirstNumber())
                .b(createUserCalculationParams.getSecondNumber())
                .result(createUserCalculationParams.getResult())
                .calculationType(createUserCalculationParams.getCalculationType())
                .username(createUserCalculationParams.getUsername())
            .build()
        );
    }

    public UserCalculationListResponse getByUser(GetUserCalculationParams params) throws ResponseStatusException {

        try {
            PageRequest paging = PageRequest.of(params.getPage(), params.getSize());
            Page<UserCalculation> userCalculations = userCalculationRepository.findAllByUsername(
                    params.getUsername(), paging
            );

            return UserCalculationListResponse.builder()
                .page(userCalculations.getNumber())
                .totalPages(userCalculations.getTotalPages())
                .total(userCalculations.getTotalElements())
                .userCalculations(userCalculations.getContent())
            .build();
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage());
        }
    }
}
