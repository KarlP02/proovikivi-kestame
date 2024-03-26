package org.balltg.proovikivikestame_be.controller;

import org.balltg.proovikivikestame_be.model.challenge.CategoryModel;
import org.balltg.proovikivikestame_be.model.challenge.GoalModel;
import org.balltg.proovikivikestame_be.model.challenge.TargetAudienceModel;
import org.balltg.proovikivikestame_be.service.challenge.CategoryService;
import org.balltg.proovikivikestame_be.service.challenge.GoalService;
import org.balltg.proovikivikestame_be.service.challenge.TargetAudienceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/challenge")
@CrossOrigin
public class ChallengeController {
    @Autowired
    private CategoryService categoryService;

    @Autowired
    private TargetAudienceService targetAudienceService;

    @Autowired
    private GoalService goalService;

    @GetMapping("/category")
    public List<CategoryModel> findAllCategories() {
        return categoryService.findAll();
    }

    @GetMapping("/targetaudience")
    public List<TargetAudienceModel> findAllTargetAudiences() {
        return targetAudienceService.findAll();
    }

    @GetMapping("/goal")
    public List<GoalModel> findAllGoals() {
        return goalService.findAll();
    }
}
