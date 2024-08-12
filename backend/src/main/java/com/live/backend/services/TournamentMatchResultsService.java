package com.live.backend.services;

import java.time.LocalDateTime;
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
        tournamentMatchResults.setCreated_at(LocalDateTime.now());
        tournamentMatchResults.setUpdated_at(LocalDateTime.now());
        tournamentMatchResults.setDeleted_at(null);
        return tournamentMatchResultsRepository.save(tournamentMatchResults);
    }

    public TournamentMatchResults updateTournamentMatchResult(Long id, TournamentMatchResults tournamentMatchResults) {
        Optional<TournamentMatchResults> existingResultOpt = tournamentMatchResultsRepository.findById(id);
        if (existingResultOpt.isPresent()) {
            TournamentMatchResults existingResult = existingResultOpt.get();
            existingResult.setTournament_match_id(tournamentMatchResults.getTournament_match_id());
            existingResult.setResult_type(tournamentMatchResults.getResult_type());
            existingResult.setWinning_team_id(tournamentMatchResults.getWinning_team_id());
            existingResult.setResult_data(tournamentMatchResults.getResult_data());
            existingResult.setCreated_at(tournamentMatchResults.getCreated_at());
            existingResult.setUpdated_at(LocalDateTime.now());
            existingResult.setDeleted_at(tournamentMatchResults.getDeleted_at());

            return tournamentMatchResultsRepository.save(existingResult);
        } else {
            throw new RuntimeException("TournamentMatchResult not found with ID: " + id);
        }
    }

    public void deleteById(Long id) {
        tournamentMatchResultsRepository.deleteById(id);
    }
}
