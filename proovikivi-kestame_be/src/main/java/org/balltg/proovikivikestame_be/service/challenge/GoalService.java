package org.balltg.proovikivikestame_be.service.challenge;

import org.balltg.proovikivikestame_be.model.challenge.GoalModel;
import org.balltg.proovikivikestame_be.repository.challenge.GoalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GoalService {
    @Autowired
    public GoalRepository goalRepository;

    public List<GoalModel> findAll() {
        return goalRepository.findAll();
    }
}
