package org.balltg.proovikivikestame_be.service;

import lombok.RequiredArgsConstructor;
import org.balltg.proovikivikestame_be.model.GoalModel;
import org.balltg.proovikivikestame_be.repository.GoalRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GoalService {
    public final GoalRepository goalRepository;

    public List<GoalModel> findAll() {
        return goalRepository.findAll();
    }
}
