package org.balltg.proovikivikestame_be.model.project;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.balltg.proovikivikestame_be.model.GoalModel;
import org.balltg.proovikivikestame_be.model.challenge.ChallengeModel;
import org.balltg.proovikivikestame_be.model.user.UserModel;

import java.util.HashSet;
import java.util.Set;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "project")
public class ProjectModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", nullable = false)
    private UserModel user;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String description;

    private String keywords;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "main_type_id", nullable = false)
    private MainTypeModel mainType;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "contribution_id", nullable = false)
    private ContributionModel contribution;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "type_id", nullable = false)
    private TypeModel type;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(
            name = "project_goal",
            joinColumns = {@JoinColumn(name = "project_id", nullable = false)},
            inverseJoinColumns = {@JoinColumn(name = "goal_id", nullable = false)}
    )
    private Set<GoalModel> goal = new HashSet<>();

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "challenge_id", nullable = false)
    private ChallengeModel challenge;
}
