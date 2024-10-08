package com.live.backend.repos;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.live.backend.models.Migrations;

@Repository
public interface MigrationsRepository extends JpaRepository<Migrations, Integer> {
}
