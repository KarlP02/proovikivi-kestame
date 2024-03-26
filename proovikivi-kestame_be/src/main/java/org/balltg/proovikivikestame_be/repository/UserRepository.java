package org.balltg.proovikivikestame_be.repository;

import org.balltg.proovikivikestame_be.model.user.RoleModel;
import org.balltg.proovikivikestame_be.model.user.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserModel, Long> {
    Optional<UserModel> findByEmail(String email);
}
