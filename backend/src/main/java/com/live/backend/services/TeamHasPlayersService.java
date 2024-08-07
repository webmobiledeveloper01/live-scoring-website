package com.live.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.live.backend.models.TeamHasPlayers;
import com.live.backend.repos.TeamHasPlayersRepository;

@Service
public class TeamHasPlayersService {

    @Autowired
    private TeamHasPlayersRepository teamHasPlayersRepository;

    public List<TeamHasPlayers> getAllTeamHasPlayers() {
        return teamHasPlayersRepository.findAll();
    }

    public Optional<TeamHasPlayers> getTeamHasPlayerById(Long id) {
        return teamHasPlayersRepository.findById(id);
    }

    public TeamHasPlayers createTeamHasPlayer(TeamHasPlayers teamHasPlayers) {
        return teamHasPlayersRepository.save(teamHasPlayers);
    }

    public TeamHasPlayers updateTeamHasPlayer(Long id, TeamHasPlayers teamHasPlayers) {
        if (teamHasPlayersRepository.existsById(id)) {
            teamHasPlayers.setId(id);
            return teamHasPlayersRepository.save(teamHasPlayers);
        } else {
            throw new RuntimeException("TeamHasPlayers not found with id " + id);
        }
    }

    public void deleteTeamHasPlayer(Long id) {
        teamHasPlayersRepository.deleteById(id);
    }
}
