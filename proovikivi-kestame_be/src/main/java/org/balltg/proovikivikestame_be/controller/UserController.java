package org.balltg.proovikivikestame_be.controller;

import lombok.RequiredArgsConstructor;
import org.balltg.proovikivikestame_be.model.user.UserModel;
import org.balltg.proovikivikestame_be.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
@CrossOrigin
public class UserController {
    private final UserService userService;

    @GetMapping()
    public List<UserModel> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{email}")
    public Optional<UserModel> getUserByEmail(@PathVariable String email) {
        return userService.getUserByEmail(email);
    }

    @PostMapping()
    public void addUser(@RequestBody UserModel user) {
        userService.addUser(user);
    }

    @PutMapping("/{index}")
    public void updateUser(@PathVariable Long index, @RequestBody UserModel user) {
        userService.updateUser(index, user);
    }

    @DeleteMapping("/{index}")
    public void deleteUser(@PathVariable Long index) {
        userService.deleteUser(index);
    }
}
