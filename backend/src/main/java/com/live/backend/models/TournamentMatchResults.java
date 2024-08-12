package com.live.backend.models;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "tournament_match_results") 
@Data
public class TournamentMatchResults {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "tournament_matches_id", nullable = false)
    private TournamentMatches TournamentMatches;

    @Column(name = "result_type", length = 255, nullable = true)
    private String result_type;

    @Column(name = "winning_team_id", nullable = true)
    private Long winning_team_id;

    @Column(name = "result_data", columnDefinition = "json", nullable = true)
    private String result_data;

    @Column(name = "created_at", nullable = true)
    private LocalDateTime created_at;

    @Column(name = "updated_at", nullable = true)
    private LocalDateTime updated_at;

    @Column(name = "deleted_at", nullable = true)
    private LocalDateTime deleted_at;

    public Object getTournament_match_id() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getTournament_match_id'");
    }

    public void setTournament_match_id(Object tournament_match_id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'setTournament_match_id'");
    }
}
