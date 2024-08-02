package com.live.backend.models;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "cache_locks")
public class CacheLocks {

    @Id
    @Column(name = "cache_lock_key", nullable = false)
    private String cache_lock_key;

    @Column(name = "owner", nullable = false)
    private String owner;

    @Column(name = "expiration", nullable = false)
    private Integer expiration;
}
