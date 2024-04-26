package org.balltg.proovikivikestame_be.repository.challenge;

import org.balltg.proovikivikestame_be.model.challenge.ChallengeModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChallengeRepository extends JpaRepository<ChallengeModel, Long> {
}
