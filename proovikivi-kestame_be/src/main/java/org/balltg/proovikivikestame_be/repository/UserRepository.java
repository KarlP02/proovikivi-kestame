package org.balltg.proovikivikestame_be.repository;

import org.balltg.proovikivikestame_be.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<UserModel, Long> {
    List<UserModel> findByFirstname(String firstname);
}
