package com.live.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.live.backend.models.TournamentMatches;
import com.live.backend.repos.TournamentMatchesRepository;

@Service
public class TournamentMatchesService {

    @Autowired
    private TournamentMatchesRepository tournamentMatchesRepository;

    public List<TournamentMatches> findAll() {
        return tournamentMatchesRepository.findAll();
    }

    public Optional<TournamentMatches> findById(Long id) {
        return tournamentMatchesRepository.findById(id);
    }

    public TournamentMatches save(TournamentMatches tournamentMatch) {
        return tournamentMatchesRepository.save(tournamentMatch);
    }

    public void deleteById(Long id) {
        tournamentMatchesRepository.deleteById(id);
    }
}
