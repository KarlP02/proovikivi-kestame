package org.balltg.proovikivikestame_be.service;

import org.balltg.proovikivikestame_be.model.UserModel;
import org.balltg.proovikivikestame_be.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<UserModel> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<UserModel> getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public void addUser(UserModel user) {
        userRepository.save(user);
    }

    public void deleteUser(Long index) {
        userRepository.deleteById(index);
    }

    public void updateUser(Long index, UserModel user) {
        userRepository.findById(index);
        user.setId(index);
        userRepository.save(user);
    }
}
