package com.live.backend.models;

import java.time.LocalDateTime;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String email;

    @Column(columnDefinition = "DATETIME DEFAULT NULL")
    private LocalDateTime email_verified_at;

    @Column(nullable = false)
    private String password;

    @Column(columnDefinition = "TINYINT(4) DEFAULT 1", nullable = false)
    private int role;

    @Column(columnDefinition = "TINYINT(4) DEFAULT 1", nullable = false)
    private int status;

    private String remember_token;

    @Column(nullable = false, updatable = false)
    private LocalDateTime created_at;

    @Column(nullable = false)
    private LocalDateTime updated_at;

    @Column(columnDefinition = "DATETIME DEFAULT NULL")
    private LocalDateTime deleted_at;
}
