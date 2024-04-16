package org.balltg.proovikivikestame_be.service.project;

import lombok.RequiredArgsConstructor;
import org.balltg.proovikivikestame_be.dto.project.ProjectNameResponse;
import org.balltg.proovikivikestame_be.dto.project.ProjectRequest;
import org.balltg.proovikivikestame_be.dto.project.ProjectResponse;
import org.balltg.proovikivikestame_be.model.GoalModel;
import org.balltg.proovikivikestame_be.model.project.ProjectModel;
import org.balltg.proovikivikestame_be.repository.GoalRepository;
import org.balltg.proovikivikestame_be.repository.project.ContributionRepository;
import org.balltg.proovikivikestame_be.repository.project.MainTypeRepository;
import org.balltg.proovikivikestame_be.repository.project.ProjectRepository;
import org.balltg.proovikivikestame_be.repository.project.TypeRepository;
import org.balltg.proovikivikestame_be.repository.user.UserRepository;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProjectService {
    private final ProjectRepository projectRepository;
    private final UserRepository userRepository;
    private final MainTypeRepository mainTypeRepository;
    private final ContributionRepository contributionRepository;
    private final TypeRepository typeRepository;
    private final GoalRepository goalRepository;

    public List<ProjectModel> findAll() {
        return projectRepository.findAll();
    }

    public void uploadProject(ProjectRequest request) {
        Set<GoalModel> goal = new HashSet<>(goalRepository.findAllById(request.getGoal()));

        var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        var mainType = mainTypeRepository.findById(request.getMainType()).orElseThrow();
        var contribution = contributionRepository.findById(request.getContribution()).orElseThrow();
        var type = typeRepository.findById(request.getType()).orElseThrow();

        var project = ProjectModel.builder()
                .name(request.getName())
                .description(request.getDescription())
                .keywords(request.getKeywords())
                .user(user)
                .mainType(mainType)
                .contribution(contribution)
                .type(type)
                .goal(goal)
                .build();
        projectRepository.save(project);
    }

    public ProjectResponse findProjectById(Long index) {
        var project = projectRepository.findById(index).orElseThrow();

        return ProjectResponse.builder()
                .name(project.getName())
                .description(project.getDescription())
                .keywords(project.getKeywords())
                .mainType(project.getMainType())
                .contribution(project.getContribution())
                .type(project.getType())
                .goal(project.getGoal())
                .build();
    }

    public ProjectNameResponse findProjectName() {
        var project = projectRepository.findAll();

        return ProjectNameResponse.builder()
                .name(project.stream().map(ProjectModel::getName).collect(Collectors.toList()))
                .build();
    }
}
