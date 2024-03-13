package org.balltg.proovikivikestame_be.controller;

import org.balltg.proovikivikestame_be.model.UserModel;
import org.balltg.proovikivikestame_be.repository.UserRepository;
import org.balltg.proovikivikestame_be.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/user")
    public List<UserModel> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/user/{firstname}")
    public List<UserModel> getUserByFirstname(@PathVariable String firstname) {
        return userService.getUserByFirstname(firstname);
    }

    @PostMapping("/user")
    public void addUser(@RequestBody UserModel user) {
        userService.addUser(user);
    }
}
