package org.balltg.proovikivikestame_be.service;

import org.balltg.proovikivikestame_be.model.UserModel;
import org.balltg.proovikivikestame_be.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<UserModel> getAllUsers() {
        return userRepository.findAll();
    }

    public List<UserModel> getUserByFirstname(String firstname) {
        return userRepository.findByFirstname(firstname);
    }

    public void addUser(UserModel user) {
        userRepository.save(user);
    }
}
