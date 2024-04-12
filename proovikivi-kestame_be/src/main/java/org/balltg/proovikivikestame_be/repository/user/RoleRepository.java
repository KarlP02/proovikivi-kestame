package org.balltg.proovikivikestame_be.repository.user;

import org.balltg.proovikivikestame_be.model.user.RoleModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<RoleModel, Long> {
    RoleModel findByName(String name);
}
