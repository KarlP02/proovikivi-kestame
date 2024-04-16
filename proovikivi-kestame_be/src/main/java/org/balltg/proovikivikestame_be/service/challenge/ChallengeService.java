package org.balltg.proovikivikestame_be.service.challenge;

import lombok.RequiredArgsConstructor;
import org.balltg.proovikivikestame_be.dto.challenge.ChallengeNameResponse;
import org.balltg.proovikivikestame_be.dto.challenge.ChallengeRequest;
import org.balltg.proovikivikestame_be.dto.challenge.ChallengeResponse;
import org.balltg.proovikivikestame_be.model.challenge.ChallengeModel;
import org.balltg.proovikivikestame_be.model.GoalModel;
import org.balltg.proovikivikestame_be.model.TargetAudienceModel;
import org.balltg.proovikivikestame_be.repository.user.UserRepository;
import org.balltg.proovikivikestame_be.repository.challenge.CategoryRepository;
import org.balltg.proovikivikestame_be.repository.challenge.ChallengeRepository;
import org.balltg.proovikivikestame_be.repository.GoalRepository;
import org.balltg.proovikivikestame_be.repository.TargetAudienceRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ChallengeService {
    private final ChallengeRepository challengeRepository;
    private final UserRepository userRepository;
    private final CategoryRepository categoryRepository;
    private final TargetAudienceRepository targetAudienceRepository;
    private final GoalRepository goalRepository;

    public void uploadChallenge(ChallengeRequest request) {
        Set<TargetAudienceModel> target_audiences = new HashSet<>(targetAudienceRepository.findAllById(request.getTarget_audience()));
        Set<GoalModel> goals = new HashSet<>(goalRepository.findAllById(request.getGoal()));

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM/dd/yyyy");

        var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        var category = categoryRepository.findById(request.getCategory()).orElseThrow();
        var begin_date = LocalDate.parse(request.getBegin_date(), formatter);
        var end_date = LocalDate.parse(request.getEnd_date(), formatter);

        var challenge = ChallengeModel.builder()
                .name(request.getName())
                .contact_person(request.getContact_person())
                .person_email(request.getPerson_email())
                .begin_date(begin_date)
                .end_date(end_date)
                .description(request.getDescription())
                .question(request.getQuestion())
                .user(user)
                .category(category)
                .target_audience(target_audiences)
                .goal(goals)
                .build();
        challengeRepository.save(challenge);
    }

    public List<ChallengeModel> findAll() {
        return challengeRepository.findAll();
    }

    public ChallengeResponse findChallengeById(Long index) {
        var challenge = challengeRepository.findById(index).orElseThrow();

        return ChallengeResponse.builder()
                .name(challenge.getName())
                .contact_person(challenge.getContact_person())
                .person_email(challenge.getPerson_email())
                .begin_date(challenge.getBegin_date())
                .end_date(challenge.getEnd_date())
                .description(challenge.getDescription())
                .category(challenge.getCategory())
                .target_audience(challenge.getTarget_audience())
                .goal(challenge.getGoal())
                .build();
    }

    public ChallengeNameResponse findChallengeName() {
        var challenge = challengeRepository.findAll();

        return  ChallengeNameResponse.builder()
                .name(challenge.stream().map(ChallengeModel::getName).collect(Collectors.toList()))
                .build();
    }
}
