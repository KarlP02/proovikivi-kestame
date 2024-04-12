package org.balltg.proovikivikestame_be.service.user;

import lombok.RequiredArgsConstructor;
import org.balltg.proovikivikestame_be.repository.user.RoleRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RoleService {
    private final RoleRepository roleRepository;
}
