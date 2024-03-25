package org.balltg.proovikivikestame_be.model.enterprise;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.balltg.proovikivikestame_be.model.user.UserModel;

import java.util.HashSet;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "enterprise")
public class EnterpriseModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private int register_code;

    @ManyToOne
    @JoinColumn(name = "enterprise_type_id")
    private EnterpriseTypeModel enterpriseType;

    @ManyToOne
    @JoinColumn(name = "enterprise_foa_id")
    private EnterpriseFoaModel enterpriseFoa;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(
            name = "enterprise_expectation",
            joinColumns = {@JoinColumn(name = "enterprise_id")},
            inverseJoinColumns = {@JoinColumn(name = "expectation_id")}
    )
    private Set<ExpectationModel> expectation = new HashSet<>();
}
