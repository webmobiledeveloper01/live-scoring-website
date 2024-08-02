package com.live.backend.models;

import java.sql.Timestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "player_statics")
public class PlayerStatics {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "team_id", nullable = false)
    private Long team_id;

    @Column(name = "player_id", nullable = false)
    private Long player_id;

    @Column(name = "tournament_id", nullable = false)
    private Long tournament_id;

    @Column(name = "performance_data", columnDefinition = "json", nullable=true)
    private String performance_data;

    @Column(name = "created_at", nullable = true)
    private Timestamp created_at;

    @Column(name = "updated_at", nullable = true)
    private Timestamp updated_at;

    @Column(name = "deleted_at", nullable = true)
    private Timestamp deleted_at;
}
