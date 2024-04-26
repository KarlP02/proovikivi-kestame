package org.balltg.proovikivikestame_be.service.project;

import lombok.RequiredArgsConstructor;
import org.balltg.proovikivikestame_be.model.project.TypeModel;
import org.balltg.proovikivikestame_be.repository.project.TypeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TypeService {
    private final TypeRepository typeRepository;

    public List<TypeModel> findAll() {
        return typeRepository.findAll();
    }
}
