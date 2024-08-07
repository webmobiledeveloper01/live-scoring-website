package com.live.backend.repos;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.live.backend.models.Tournaments;

@Repository
public interface TournamentsRepository extends JpaRepository<Tournaments, Long> {
}
