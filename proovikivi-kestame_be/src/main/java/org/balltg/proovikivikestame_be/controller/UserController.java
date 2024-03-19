package org.balltg.proovikivikestame_be.controller;

import org.balltg.proovikivikestame_be.model.UserModel;
import org.balltg.proovikivikestame_be.repository.UserRepository;
import org.balltg.proovikivikestame_be.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping()
    public List<UserModel> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("{email}")
    public Optional<UserModel> getUserByEmail(@PathVariable String email) {
        return userService.getUserByEmail(email);
    }

    @PostMapping()
    public void addUser(@RequestBody UserModel user) {
        userService.addUser(user);
    }

    @PutMapping("{index}")
    public void updateUser(@PathVariable Long index, @RequestBody UserModel user) {
        userService.updateUser(index, user);
    }

    @DeleteMapping("{index}")
    public void deleteUser(@PathVariable Long index) {
        userService.deleteUser(index);
    }
}
