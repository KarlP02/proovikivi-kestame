package org.balltg.proovikivikestame_be.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ChallengeRequest {
    private String name;
    private String contact_person;
    private String person_email;
    private LocalDate begin_date;
    private LocalDate end_date;
    private String description;
    private String question;
    private String email;
    private String category;
    private List<String> target_audience;
    private List<String> goal;
}
