package com.live.backend.models;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Jobs {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "BIGINT(20) UNSIGNED", nullable = false)
    private Long id;

    @Column(length = 255, nullable = false)
    private String queue;

    @Column(columnDefinition = "LONGTEXT", nullable = false)
    private String payload;

    @Column(columnDefinition = "TINYINT(3) UNSIGNED", nullable = false)
    private int attempts;

    @Column(name = "reserved_at", nullable = true)
    private LocalDateTime reserved_at;

    @Column(name = "available_at", nullable = false)
    private LocalDateTime available_at;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime created_at;

}
