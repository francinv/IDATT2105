package com.ntnu.idatt2105.api.controllers;

import com.ntnu.idatt2105.api.models.GetUserCalculationParams;
import com.ntnu.idatt2105.api.models.UserCalculationListResponse;
import com.ntnu.idatt2105.api.services.JwtService;
import com.ntnu.idatt2105.api.services.UserCalculationsService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/calculator/user/")
@CrossOrigin(origins = {"https://idatt2105-ex5.vercel.app/", "http://127.0.0.1:5173"})
@RequiredArgsConstructor
public class UserCalculationController {

    Logger logger = LoggerFactory.getLogger(UserCalculationController.class);
    private final UserCalculationsService userCalculationsService;
    private final JwtService jwtService;

    @RequestMapping("")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<UserCalculationListResponse> getByUser(
            @RequestParam int page,
            @RequestParam int size,
            @RequestParam String username
    ) {
        return ResponseEntity.ok(userCalculationsService.getByUser(
            new GetUserCalculationParams(page, size, username)
        ));
    }

}
