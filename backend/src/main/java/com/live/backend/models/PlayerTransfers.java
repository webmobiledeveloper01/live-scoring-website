package com.live.backend.models;

import java.time.LocalDateTime;

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
@Table(name = "player_transfers")
public class PlayerTransfers {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, columnDefinition = "BIGINT(20) UNSIGNED")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "player_id", nullable = false, 
                foreignKey = @ForeignKey(name = "fk_player_transfer_player"))
    private Players player;

    @ManyToOne
    @JoinColumn(name = "from_team_id", nullable = false, 
                foreignKey = @ForeignKey(name = "fk_player_transfer_from_team"))
    private Teams fromTeam;

    @ManyToOne
    @JoinColumn(name = "to_team_id", nullable = false, 
                foreignKey = @ForeignKey(name = "fk_player_transfer_to_team"))
    private Teams toTeam;

    @Column(name = "status",columnDefinition = "TINYINT(4) DEFAULT 1", nullable = false)
    private int status;

    @Column(name = "created_at")
    private LocalDateTime created_at;

    @Column(name = "updated_at")
    private LocalDateTime updated_at;
}
