package org.balltg.proovikivikestame_be.repository.project;

import org.balltg.proovikivikestame_be.model.project.ProjectModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends JpaRepository<ProjectModel, Long> {
}
