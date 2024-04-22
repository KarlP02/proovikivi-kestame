package org.balltg.proovikivikestame_be.repository.project;

import org.balltg.proovikivikestame_be.model.challenge.ChallengeModel;
import org.balltg.proovikivikestame_be.model.project.ProjectModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProjectRepository extends JpaRepository<ProjectModel, Long> {
    List<ProjectModel> findAllByChallenge(Optional<ChallengeModel> challenge);
}
