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
@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/user")
    public List<UserModel> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/user/{lastname}")
    public List<UserModel> getUserByLastname(@PathVariable String lastname) {
        return userService.getUserByLastname(lastname);
    }

    @PostMapping("/user")
    public void addUser(@RequestBody UserModel user) {
        userService.addUser(user);
    }

    @PostMapping("/login")
    public void loginUser(@RequestParam UserModel email, @RequestParam UserModel password) {

    }

    @PutMapping("/user/{index}")
    public void updateUser(@PathVariable Long index, @RequestBody UserModel user) {
        userService.updateUser(index, user);
    }

    @DeleteMapping("/user/{index}")
    public void deleteUser(@PathVariable Long index) {
        userService.deleteUser(index);
    }
}
