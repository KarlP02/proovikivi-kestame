package org.balltg.proovikivikestame_be.service;

import lombok.RequiredArgsConstructor;
import org.balltg.proovikivikestame_be.model.TargetAudienceModel;
import org.balltg.proovikivikestame_be.repository.TargetAudienceRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TargetAudienceService {
    public final TargetAudienceRepository targetAudienceRepository;

    public List<TargetAudienceModel> findAll() {
        return targetAudienceRepository.findAll();
    }
}
