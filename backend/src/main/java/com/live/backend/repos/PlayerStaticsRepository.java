package com.live.backend.repos;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.live.backend.models.PlayerStatics;

@Repository
public interface PlayerStaticsRepository extends JpaRepository<PlayerStatics, Long> {
}
