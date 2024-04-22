package org.balltg.proovikivikestame_be.dto.project;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.balltg.proovikivikestame_be.model.GoalModel;
import org.balltg.proovikivikestame_be.model.challenge.ChallengeModel;
import org.balltg.proovikivikestame_be.model.project.ContributionModel;
import org.balltg.proovikivikestame_be.model.project.MainTypeModel;
import org.balltg.proovikivikestame_be.model.project.TypeModel;

import java.util.Set;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProjectResponse {
    private String name;
    private String description;
    private String keywords;
    private MainTypeModel mainType;
    private ContributionModel contribution;
    private TypeModel type;
    private Set<GoalModel> goal;
    private ChallengeModel challenge;
}
