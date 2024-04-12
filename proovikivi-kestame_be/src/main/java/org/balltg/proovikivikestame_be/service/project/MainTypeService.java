package org.balltg.proovikivikestame_be.service.project;

import lombok.RequiredArgsConstructor;
import org.balltg.proovikivikestame_be.repository.project.MainTypeRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MainTypeService {
    private final MainTypeRepository mainTypeRepository;
}
