package org.balltg.proovikivikestame_be.controller;

import lombok.RequiredArgsConstructor;
import org.balltg.proovikivikestame_be.model.GoalModel;
import org.balltg.proovikivikestame_be.service.GoalService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/goal")
@CrossOrigin
public class GoalController {
    private final GoalService goalService;

    @GetMapping
    public List<GoalModel> findAllGoals() {
        return goalService.findAll();
    }
}
