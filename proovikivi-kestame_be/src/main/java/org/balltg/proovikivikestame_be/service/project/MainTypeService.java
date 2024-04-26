package org.balltg.proovikivikestame_be.service.project;

import lombok.RequiredArgsConstructor;
import org.balltg.proovikivikestame_be.model.project.MainTypeModel;
import org.balltg.proovikivikestame_be.repository.project.MainTypeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MainTypeService {
    private final MainTypeRepository mainTypeRepository;

    public List<MainTypeModel> findAll() {
        return mainTypeRepository.findAll();
    }
}
