package com.live.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ManagerDTO {
    private long id;
    private String name;
    private String email;
    private String password;
    private int role = 2; 
    private int status = 1; 
}
