package org.balltg.proovikivikestame_be.dto.challenge;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.balltg.proovikivikestame_be.model.challenge.CategoryModel;
import org.balltg.proovikivikestame_be.model.GoalModel;
import org.balltg.proovikivikestame_be.model.TargetAudienceModel;

import java.time.LocalDate;
import java.util.Set;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ChallengeResponse {
    private String name;
    private String contact_person;
    private String person_email;
    private LocalDate begin_date;
    private LocalDate end_date;
    private String description;
    private CategoryModel category;
    private Set<TargetAudienceModel> target_audience;
    private Set<GoalModel> goal;
}
