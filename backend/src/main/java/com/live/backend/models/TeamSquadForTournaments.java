package com.live.backend.models;
import java.time.LocalDateTime

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "team_squad_for_tournaments")
public class TeamSquadForTournaments {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, columnDefinition = "BIGINT(20) UNSIGNED")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "tournament_id", nullable = false, 
                foreignKey = @ForeignKey(name = "fk_team_squad_tournament"))
    private Tournaments tournament;

    @ManyToOne
    @JoinColumn(name = "team_id", nullable = false, 
                foreignKey = @ForeignKey(name = "fk_team_squad_team"))
    private Teams team;

    @ManyToOne
    @JoinColumn(name = "player_id", nullable = false, 
                foreignKey = @ForeignKey(name = "fk_team_squad_player"))
    private Players player;

    @Column(name = "created_at")
    private LocalDateTime created_at;

    @Column(name = "updated_at")
    private LocalDateTime updated_at;
}