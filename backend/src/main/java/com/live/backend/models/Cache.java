package com.live.backend.models;

import java.sql.Timestamp;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "cache")

public class Cache {

    @Id
    @Column(name = "cache_key", length = 255)
    private String cacheKey;

    @Column(name = "value", columnDefinition = "MEDIUMTEXT")
    private String value;

   
    @Column(columnDefinition = "INT(11)",nullable = false)
    private Integer expiration;

}
