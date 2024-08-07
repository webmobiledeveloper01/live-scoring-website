package com.live.backend.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.live.backend.models.TournamentSponsers;

@Repository
public interface TournamentSponsersRepository extends JpaRepository<TournamentSponsers, Long> {
}
