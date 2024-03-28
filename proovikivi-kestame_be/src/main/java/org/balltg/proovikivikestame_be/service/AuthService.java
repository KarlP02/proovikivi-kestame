package org.balltg.proovikivikestame_be.service;

import lombok.RequiredArgsConstructor;
import org.balltg.proovikivikestame_be.dto.AuthRequest;
import org.balltg.proovikivikestame_be.dto.AuthResponse;
import org.balltg.proovikivikestame_be.dto.RegisterRequest;
import org.balltg.proovikivikestame_be.model.user.RoleModel;
import org.balltg.proovikivikestame_be.model.user.UserModel;
import org.balltg.proovikivikestame_be.repository.RoleRepository;
import org.balltg.proovikivikestame_be.repository.UserRepository;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthResponse register(RegisterRequest request) {
        Set<RoleModel> roles = new HashSet<>();
        roles.add(roleRepository.findByName("USER"));

        var user = UserModel.builder()
                .firstname(request.getFirstname())
                .lastname(request.getLastname())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .deleted(false)
                .roles(roles)
                .build();
        userRepository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthResponse authenticate(AuthRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = userRepository.findByEmail(request.getEmail())
                .orElseThrow();
        Set<RoleModel> role = user.getRoles();
        String roleName = role.toString();
        Map<String, Object> rolesMap = new HashMap<>();
        rolesMap.put("role", roleName);
        var jwtToken = jwtService.generateToken(rolesMap, user);
        return AuthResponse.builder()
                .token(jwtToken)
                .build();
    }
}
