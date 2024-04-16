package org.balltg.proovikivikestame_be.dto.project;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProjectRequest {
    private String name;
    private String description;
    private String keywords;
    private String email;
    private Long mainType;
    private Long contribution;
    private Long type;
    private Set<Long> goal;
}
