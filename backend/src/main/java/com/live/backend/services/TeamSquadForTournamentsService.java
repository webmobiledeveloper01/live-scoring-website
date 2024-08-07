package com.live.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.live.backend.models.TeamSquadForTournaments;
import com.live.backend.repos.TeamSquadForTournamentsRepository;

@Service
public class TeamSquadForTournamentsService {

    @Autowired
    private TeamSquadForTournamentsRepository teamSquadForTournamentsRepository;

    public List<TeamSquadForTournaments> findAll() {
        return teamSquadForTournamentsRepository.findAll();
    }

    public Optional<TeamSquadForTournaments> findById(Long id) {
        return teamSquadForTournamentsRepository.findById(id);
    }

    public TeamSquadForTournaments save(TeamSquadForTournaments teamSquad) {
        return teamSquadForTournamentsRepository.save(teamSquad);
    }

    public void deleteById(Long id) {
        teamSquadForTournamentsRepository.deleteById(id);
    }
}
