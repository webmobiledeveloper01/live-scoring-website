package com.live.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.live.backend.models.TournamentMatchResults;
import com.live.backend.repos.TournamentMatchResultsRepository;

@Service
public class TournamentMatchResultsService {

    @Autowired
    private TournamentMatchResultsRepository tournamentMatchResultsRepository;

    public List<TournamentMatchResults> findAll() {
        return tournamentMatchResultsRepository.findAll();
    }

    public Optional<TournamentMatchResults> findById(Long id) {
        return tournamentMatchResultsRepository.findById(id);
    }

    public TournamentMatchResults save(TournamentMatchResults tournamentMatchResults) {
        return tournamentMatchResultsRepository.save(tournamentMatchResults);
    }

    public void deleteById(Long id) {
        tournamentMatchResultsRepository.deleteById(id);
    }
}
