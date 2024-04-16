package org.balltg.proovikivikestame_be.controller;

import lombok.RequiredArgsConstructor;
import org.balltg.proovikivikestame_be.dto.project.ProjectNameResponse;
import org.balltg.proovikivikestame_be.dto.project.ProjectRequest;
import org.balltg.proovikivikestame_be.dto.project.ProjectResponse;
import org.balltg.proovikivikestame_be.model.project.ContributionModel;
import org.balltg.proovikivikestame_be.model.project.MainTypeModel;
import org.balltg.proovikivikestame_be.model.project.ProjectModel;
import org.balltg.proovikivikestame_be.model.project.TypeModel;
import org.balltg.proovikivikestame_be.service.project.ContributionService;
import org.balltg.proovikivikestame_be.service.project.MainTypeService;
import org.balltg.proovikivikestame_be.service.project.ProjectService;
import org.balltg.proovikivikestame_be.service.project.TypeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/project")
@CrossOrigin
public class ProjectController {
    private final ProjectService projectService;
    private final ContributionService contributionService;
    private final MainTypeService mainTypeService;
    private final TypeService typeService;

    @GetMapping("/contribution")
    public List<ContributionModel> findAllContributions() {
        return contributionService.findAll();
    }

    @GetMapping("/main-type")
    public List<MainTypeModel> findAllMainTypes() {
        return mainTypeService.findAll();
    }

    @GetMapping("/type")
    public List<TypeModel> findAllTypes() {
        return typeService.findAll();
    }

    @GetMapping
    public List<ProjectModel> findAllProjects() {
        return projectService.findAll();
    }

    @GetMapping("/name")
    public ProjectNameResponse findProjectName() {
        return projectService.findProjectName();
    }

    @GetMapping("/{index}")
    public ProjectResponse findProjectById(@PathVariable Long index) {
        return projectService.findProjectById(index);
    }

    @PostMapping("/upload")
    public void uploadProject(@RequestBody ProjectRequest request) {
        projectService.uploadProject(request);
    }
}
