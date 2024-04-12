package org.balltg.proovikivikestame_be.repository.project;

import org.balltg.proovikivikestame_be.model.project.MainTypeModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MainTypeRepository extends JpaRepository<MainTypeModel, Long> {
}
