package org.balltg.proovikivikestame_be.service.user;

import lombok.RequiredArgsConstructor;
import org.balltg.proovikivikestame_be.dto.RoleNameResponse;
import org.balltg.proovikivikestame_be.model.user.RoleModel;
import org.balltg.proovikivikestame_be.repository.user.RoleRepository;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class RoleService {
    private final RoleRepository roleRepository;

    public RoleNameResponse getAllSelectableRoles() {
        var roles = roleRepository.findAll();

        roles = roles.stream().filter(role -> !("ADMIN".equals(role.getName()) || "USER".equals(role.getName()))).toList();

        return RoleNameResponse.builder()
                .name(roles.stream().map(RoleModel::getName).toList())
                .build();
    }
}
