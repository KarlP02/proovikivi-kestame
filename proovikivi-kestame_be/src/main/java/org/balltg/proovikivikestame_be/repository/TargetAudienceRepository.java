package org.balltg.proovikivikestame_be.repository;

import org.balltg.proovikivikestame_be.model.TargetAudienceModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TargetAudienceRepository extends JpaRepository<TargetAudienceModel, Long> {
}
