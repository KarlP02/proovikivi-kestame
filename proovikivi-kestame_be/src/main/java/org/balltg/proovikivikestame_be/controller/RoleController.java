package org.balltg.proovikivikestame_be.controller;

import lombok.RequiredArgsConstructor;
import org.balltg.proovikivikestame_be.dto.RoleNameResponse;
import org.balltg.proovikivikestame_be.service.user.RoleService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/role")
@CrossOrigin
public class RoleController {
    private final RoleService roleService;

    @GetMapping("/selectable")
    public RoleNameResponse getAllSelectableRoles() {
        return roleService.getAllSelectableRoles();
    }
}
