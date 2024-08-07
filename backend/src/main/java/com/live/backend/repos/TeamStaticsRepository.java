package com.live.backend.repos;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.live.backend.models.TeamStatics;

@Repository
public interface TeamStaticsRepository extends JpaRepository<TeamStatics, Long> {
}
