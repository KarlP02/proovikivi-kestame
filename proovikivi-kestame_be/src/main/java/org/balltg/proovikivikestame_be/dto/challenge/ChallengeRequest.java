package org.balltg.proovikivikestame_be.dto.challenge;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ChallengeRequest {
    private String user;
    private String name;
    private String contact_person;
    private String person_email;
    private String begin_date;
    private String end_date;
    private String description;
    private String question;
    private Long category;
    private Set<Long> target_audience;
    private Set<Long> goal;
}
