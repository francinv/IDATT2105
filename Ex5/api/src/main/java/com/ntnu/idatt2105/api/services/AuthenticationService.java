package com.ntnu.idatt2105.api.services;

import com.ntnu.idatt2105.api.entities.User;
import com.ntnu.idatt2105.api.models.AuthenticationResponse;
import com.ntnu.idatt2105.api.models.LoginRequest;
import com.ntnu.idatt2105.api.models.RegisterRequest;
import com.ntnu.idatt2105.api.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest registerRequest) {
        var user = User.builder()
                .username(registerRequest.getUsername())
                .password(passwordEncoder.encode(registerRequest.getPassword()))
                .role(registerRequest.getRole())
                .build();
        userRepository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponse login(LoginRequest registerRequest) {
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                    registerRequest.getUsername(),
                    registerRequest.getPassword()
            )
        );
        var user = userRepository.findByUsername(registerRequest.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
        var jwtToken = jwtService.generateToken(user);

        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }
}
