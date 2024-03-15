package org.balltg.proovikivikestame_be.model;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.time.Instant;

@Data
@Entity
public class UserModel {
    private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) Long id;
    private String firstname;
    private String lastname;
    private String email;
    private String password;
    private Boolean deleted = false;
    private @CreationTimestamp Instant created;
}
