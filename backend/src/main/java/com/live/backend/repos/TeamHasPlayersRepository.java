package com.live.backend.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.live.backend.models.TeamHasPlayers;

@Repository
public interface TeamHasPlayersRepository extends JpaRepository<TeamHasPlayers, Long> {
}
