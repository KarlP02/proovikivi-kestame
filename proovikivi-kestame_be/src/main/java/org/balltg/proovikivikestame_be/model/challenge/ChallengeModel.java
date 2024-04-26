package org.balltg.proovikivikestame_be.model.challenge;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.balltg.proovikivikestame_be.model.GoalModel;
import org.balltg.proovikivikestame_be.model.TargetAudienceModel;
import org.balltg.proovikivikestame_be.model.project.ProjectModel;
import org.balltg.proovikivikestame_be.model.user.UserModel;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "challenge")
public class ChallengeModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", nullable = false)
    private UserModel user;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String contact_person;

    @Column(nullable = false)
    private String person_email;

    @Column(nullable = false)
    @DateTimeFormat(pattern = "MM-dd-yyyy")
    private LocalDate begin_date;

    @Column(nullable = false)
    @DateTimeFormat(pattern = "MM-dd-yyyy")
    private LocalDate end_date;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private String question;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "category_id", nullable = false)
    private CategoryModel category;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(
            name = "challenge_target_audience",
            joinColumns = {@JoinColumn(name = "challenge_id", nullable = false)},
            inverseJoinColumns = {@JoinColumn(name = "target_audience_id", nullable = false)}
    )
    private Set<TargetAudienceModel> target_audience = new HashSet<>();

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(
            name = "challenge_goal",
            joinColumns = {@JoinColumn(name = "challenge_id", nullable = false)},
            inverseJoinColumns = {@JoinColumn(name = "goal_id", nullable = false)}
    )
    private Set<GoalModel> goal = new HashSet<>();
}
