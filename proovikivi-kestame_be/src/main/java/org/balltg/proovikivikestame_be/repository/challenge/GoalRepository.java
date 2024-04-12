package org.balltg.proovikivikestame_be.repository.challenge;

import org.balltg.proovikivikestame_be.model.GoalModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GoalRepository extends JpaRepository<GoalModel, Long> {
}
