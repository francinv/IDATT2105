package com.ntnu.idatt2105.api.controllers;

import com.ntnu.idatt2105.api.models.AuthenticationResponse;
import com.ntnu.idatt2105.api.models.LoginRequest;
import com.ntnu.idatt2105.api.models.RegisterRequest;
import com.ntnu.idatt2105.api.services.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = {"https://idatt2105-ex5.vercel.app/", "http://127.0.0.1:5173"})
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody RegisterRequest registerRequest) throws Exception {
        return ResponseEntity.ok(authenticationService.register(registerRequest));

    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(
            @RequestBody LoginRequest loginRequest) throws Exception {
        return ResponseEntity.ok(authenticationService.login(loginRequest));
    }
}
