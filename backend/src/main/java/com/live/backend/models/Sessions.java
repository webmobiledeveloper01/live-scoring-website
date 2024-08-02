package com.live.backend.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Sessions {

    @Id
    @Column(length = 255, nullable = false)
    private String id;

    @Column(columnDefinition = "bigint(20) unsigned", nullable = true)
    private Long user_id;

    @Column(length = 45, nullable = true)
    private String ip_address;

    @Lob
    @Column(columnDefinition = "LONGTEXT", nullable = true)
    private String user_agent;

    @Lob
    @Column(columnDefinition = "LONGTEXT", nullable = false)
    private String payload;

    @Column(columnDefinition = "int(11)", nullable = false)
    private int last_activity;
}
