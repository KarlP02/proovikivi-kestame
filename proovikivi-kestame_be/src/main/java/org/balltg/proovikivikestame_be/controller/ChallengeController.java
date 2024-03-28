package org.balltg.proovikivikestame_be.controller;

import lombok.RequiredArgsConstructor;
import org.balltg.proovikivikestame_be.dto.ChallengeRequest;
import org.balltg.proovikivikestame_be.model.challenge.CategoryModel;
import org.balltg.proovikivikestame_be.model.challenge.GoalModel;
import org.balltg.proovikivikestame_be.model.challenge.TargetAudienceModel;
import org.balltg.proovikivikestame_be.service.challenge.CategoryService;
import org.balltg.proovikivikestame_be.service.challenge.ChallengeService;
import org.balltg.proovikivikestame_be.service.challenge.GoalService;
import org.balltg.proovikivikestame_be.service.challenge.TargetAudienceService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/challenge")
@CrossOrigin
public class ChallengeController {
    private final ChallengeService challengeService;
    private final CategoryService categoryService;
    private final TargetAudienceService targetAudienceService;
    private final GoalService goalService;

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

    @PostMapping("/upload")
    public void uploadChallenge(@RequestBody ChallengeRequest request) {
        challengeService.uploadChallenge(request);
    }
}
