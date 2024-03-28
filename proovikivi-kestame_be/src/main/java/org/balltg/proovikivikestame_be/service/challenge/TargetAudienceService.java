package org.balltg.proovikivikestame_be.service.challenge;

import lombok.RequiredArgsConstructor;
import org.balltg.proovikivikestame_be.model.challenge.TargetAudienceModel;
import org.balltg.proovikivikestame_be.repository.challenge.TargetAudienceRepository;
import org.springframework.beans.factory.annotation.Autowired;
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
