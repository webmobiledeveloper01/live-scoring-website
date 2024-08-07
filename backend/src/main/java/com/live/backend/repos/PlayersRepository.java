package com.live.backend.repos;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.live.backend.models.Players;

@Repository
public interface PlayersRepository extends JpaRepository<Players, Long> {
}
