package com.live.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.live.backend.models.TournamentParticipantTeams;
import com.live.backend.repos.TournamentParticipantTeamsRepository;

@Service
public class TournamentParticipantTeamsService {

    @Autowired
    private TournamentParticipantTeamsRepository tournamentParticipantTeamsRepository;

    public List<TournamentParticipantTeams> findAll() {
        return tournamentParticipantTeamsRepository.findAll();
    }

    public Optional<TournamentParticipantTeams> findById(Long id) {
        return tournamentParticipantTeamsRepository.findById(id);
    }

    public TournamentParticipantTeams save(TournamentParticipantTeams tournamentParticipantTeam) {
        return tournamentParticipantTeamsRepository.save(tournamentParticipantTeam);
    }

    public void deleteById(Long id) {
        tournamentParticipantTeamsRepository.deleteById(id);
    }
}
