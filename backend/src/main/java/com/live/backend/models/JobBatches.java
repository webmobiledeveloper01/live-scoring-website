package com.live.backend.models;

import java.sql.Timestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "job_batches")
public class JobBatches {
    @Id
    @Column(name = "id", length = 255, nullable = false)
    private String id;

    @Column(name = "name", length = 255, nullable = false)
    private String name;

    @Column(name = "total_jobs", nullable = false)
    private int total_jobs;

    @Column(name = "pending_jobs", nullable = false)
    private int pending_jobs;

    @Column(name = "failed_jobs", nullable = false)
    private int failed_jobs;

    @Column(name = "failed_job_ids", columnDefinition = "LONGTEXT", nullable = false)
    private String failed_job_ids;

    @Column(name = "options", columnDefinition = "MEDIUMTEXT", nullable = true)
    private String options;

    @Column(name = "cancelled_at", nullable = true)
    private Timestamp cancelled_at;

    @Column(name = "created_at", nullable = false)
    private Timestamp created_at;

    @Column(name = "finished_at", nullable = true)
    private Timestamp finished_at;
}
