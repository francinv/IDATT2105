package com.ntnu.idatt2105.api.repositories;

import com.ntnu.idatt2105.api.entities.UserCalculation;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;

public interface UserCalculationRepository extends CrudRepository<UserCalculation, Long> {
    Page<UserCalculation> findAllByUsername(String username, Pageable pageable);
}
