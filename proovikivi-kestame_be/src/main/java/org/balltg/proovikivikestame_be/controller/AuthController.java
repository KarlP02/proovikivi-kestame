package org.balltg.proovikivikestame_be.controller;

import lombok.RequiredArgsConstructor;
import org.balltg.proovikivikestame_be.dto.AuthRequest;
import org.balltg.proovikivikestame_be.dto.AuthResponse;
import org.balltg.proovikivikestame_be.dto.RegisterRequest;
import org.balltg.proovikivikestame_be.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin
public class AuthController {
    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(
            @RequestBody RegisterRequest request
    ) {
        return ResponseEntity.ok(authService.register(request));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthResponse> authenticate(
            @RequestBody AuthRequest request
    ) {
        return ResponseEntity.ok(authService.authenticate(request));
    }
}
