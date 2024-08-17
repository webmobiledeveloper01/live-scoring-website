package com.live.backend.dto;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class TournamentMatchDTO {
    private Long id;
    private Long tournamentId;
    private Long teamIdA;
    private Long teamIdB;
    private LocalDateTime match_time;
    private String match_status;
}
