package com.live.backend.repos;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.live.backend.models.LiveScores;

@Repository
public interface LiveScoresRepository extends JpaRepository<LiveScores, Long> {
}
