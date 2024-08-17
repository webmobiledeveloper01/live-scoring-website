package com.live.backend.dto;

import lombok.Data;

@Data
public class TeamDTO {
    private Long id;
    private String name;
    private String logo;
    private String description;
    private String contact_details;  
    private int status;
}
