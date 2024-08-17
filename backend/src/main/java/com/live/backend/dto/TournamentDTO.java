package com.live.backend.dto;

import java.util.Date;

import lombok.Data;


@Data
public class TournamentDTO {

    private Long id;
    private String name;
    private String description;
    private String logo;
    private Date start_date; // Consistent with the model
    private Date end_date;   // Consistent with the model
    private Long sponsor_id;
    private int status;
}
