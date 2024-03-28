package org.balltg.proovikivikestame_be.service;

import lombok.RequiredArgsConstructor;
import org.balltg.proovikivikestame_be.model.user.UserModel;
import org.balltg.proovikivikestame_be.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

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
