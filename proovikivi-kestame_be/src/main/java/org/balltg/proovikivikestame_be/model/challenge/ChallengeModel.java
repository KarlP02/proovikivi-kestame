package org.balltg.proovikivikestame_be.model.challenge;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
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

    private String name;

    private String contact_person;

    private String person_email;

    @DateTimeFormat(pattern = "MM-dd-yyyy")
    private LocalDate begin_date;

    @DateTimeFormat(pattern = "MM-dd-yyyy")
    private LocalDate end_date;

    private String description;

    private String question;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private UserModel user;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "category_id")
    private CategoryModel category;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(
            name = "challenge_target_audience",
            joinColumns = {@JoinColumn(name = "challenge_id")},
            inverseJoinColumns = {@JoinColumn(name = "target_audience_id")}
    )
    private Set<TargetAudienceModel> target_audience = new HashSet<>();

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(
            name = "challenge_goal",
            joinColumns = {@JoinColumn(name = "challenge_id")},
            inverseJoinColumns = {@JoinColumn(name = "goal_id")}
    )
    private Set<GoalModel> goal = new HashSet<>();
}
