package com.live.backend.models;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Cleanup;
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
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(columnDefinition = "bigint(20) unsigned",nullable = false)
    private Long id;

    @Column(length = 255,nullable = false)
    private String queue;

    @Column(columnDefinition = "LONGTEXT",nullable = false)
    private String payload;

    @Column(columnDefinition = "TINYINT(3) unsigned",nullable = false)
    private int attempts;

    @Column(columnDefinition = "in(10) unsigned",nullable = true)
    private int reserved_at;

    @Column(columnDefinition = "in(10) unsigned",nullable = false)
    private int available_at;

    @Column(columnDefinition = "in(10) unsigned",nullable = false)
    private int created_at;

    




}
