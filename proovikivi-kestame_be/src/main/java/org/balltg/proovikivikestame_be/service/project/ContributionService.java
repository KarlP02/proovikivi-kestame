package org.balltg.proovikivikestame_be.service.project;

import lombok.RequiredArgsConstructor;
import org.balltg.proovikivikestame_be.model.project.ContributionModel;
import org.balltg.proovikivikestame_be.repository.project.ContributionRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ContributionService {
    private final ContributionRepository contributionRepository;

    public List<ContributionModel> findAll() {
        return contributionRepository.findAll();
    }
}
