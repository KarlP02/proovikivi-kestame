package org.balltg.proovikivikestame_be.service.project;

import lombok.RequiredArgsConstructor;
import org.balltg.proovikivikestame_be.repository.project.TypeRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TypeService {
    private final TypeRepository typeRepository;
}
