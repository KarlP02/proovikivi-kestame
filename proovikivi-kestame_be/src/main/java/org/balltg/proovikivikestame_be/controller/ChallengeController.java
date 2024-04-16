package org.balltg.proovikivikestame_be.controller;

import lombok.RequiredArgsConstructor;
import org.balltg.proovikivikestame_be.dto.challenge.ChallengeNameResponse;
import org.balltg.proovikivikestame_be.dto.challenge.ChallengeRequest;
import org.balltg.proovikivikestame_be.dto.challenge.ChallengeResponse;
import org.balltg.proovikivikestame_be.model.challenge.CategoryModel;
import org.balltg.proovikivikestame_be.model.challenge.ChallengeModel;
import org.balltg.proovikivikestame_be.model.GoalModel;
import org.balltg.proovikivikestame_be.model.TargetAudienceModel;
import org.balltg.proovikivikestame_be.service.challenge.CategoryService;
import org.balltg.proovikivikestame_be.service.challenge.ChallengeService;
import org.balltg.proovikivikestame_be.service.GoalService;
import org.balltg.proovikivikestame_be.service.TargetAudienceService;
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

    @GetMapping("/category")
    public List<CategoryModel> findAllCategories() {
        return categoryService.findAll();
    }

    @GetMapping("/targetaudience")
    public List<TargetAudienceModel> findAllTargetAudiences() {
        return targetAudienceService.findAll();
    }

    @GetMapping
    public List<ChallengeModel> findAllChallenges() {
        return challengeService.findAll();
    }

    @GetMapping("/name")
    public ChallengeNameResponse findChallengeName() {
        return challengeService.findChallengeName();
    }

    @GetMapping("/{index}")
    public ChallengeResponse findChallengeById(@PathVariable Long index) {
        return challengeService.findChallengeById(index);
    }

    @PostMapping("/upload")
    public void uploadChallenge(@RequestBody ChallengeRequest request) {
        challengeService.uploadChallenge(request);
    }
}
