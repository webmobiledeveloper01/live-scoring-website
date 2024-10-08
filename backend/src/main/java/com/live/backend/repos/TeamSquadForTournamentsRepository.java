package com.live.backend.repos;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.live.backend.models.TeamSquadForTournaments;

@Repository
public interface TeamSquadForTournamentsRepository extends JpaRepository<TeamSquadForTournaments, Long> {
}
