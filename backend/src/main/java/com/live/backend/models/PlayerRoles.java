package com.live.backend.models;

import java.sql.Timestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "player_roles")
public class PlayerRoles {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "BIGINT(20) UNSIGNED", nullable = false)
    private Long id;

    @Column(length = 255, nullable = false)
    private String name;

    @Column(columnDefinition = "TINYINT(4)", nullable = false)
    private int status;

    @Column(nullable = true)
    private Timestamp deleted_at;

    @Column(nullable = true)
    private Timestamp created_at;

    @Column(nullable = true)
    private Timestamp updated_at;

}
