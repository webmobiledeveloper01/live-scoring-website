package com.live.backend.models;

import java.time.LocalDateTime;
import java.util.Date;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "tournaments")
@Data
public class Tournaments {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "name", length = 255, nullable = false)
    private String name;

    @Column(name = "description", columnDefinition = "TEXT", nullable = true)
    private String description;

    @Column(name = "logo", length = 255, nullable = true)
    private String logo;

    @Column(name = "start_date", nullable = true)
    private Date start_date;

    @Column(name = "end_date", nullable = true)
    private Date end_date;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "sponsor_id",nullable = true)
    private TournamentSponsers sponsor; 

    @Column(name = "status", nullable = false, columnDefinition = "TINYINT(4) DEFAULT 1")
    private int status = 1;

    @Column(name = "created_at", nullable = true)
    private LocalDateTime created_at;

    @Column(name = "updated_at", nullable = true)
    private LocalDateTime updated_at;

    @Column(name = "deleted_at", nullable = true)
    private LocalDateTime deleted_at;
}
