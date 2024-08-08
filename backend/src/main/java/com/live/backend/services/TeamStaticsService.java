package com.live.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.live.backend.models.TeamStatics;
import com.live.backend.repos.TeamStaticsRepository;

@Service
public class TeamStaticsService {

    @Autowired
    private TeamStaticsRepository teamStaticsRepository;

    public List<TeamStatics> findAll() {
        return teamStaticsRepository.findAll();
    }

    public Optional<TeamStatics> findById(Long id) {
        return teamStaticsRepository.findById(id);
    }

    public TeamStatics save(TeamStatics teamStatic) {
        return teamStaticsRepository.save(teamStatic);
    }

    public TeamStatics updateTeamStatic(Long id, TeamStatics teamStatic) {
        Optional<TeamStatics> existingTeamStaticOpt = teamStaticsRepository.findById(id);
        if (existingTeamStaticOpt.isPresent()) {
            TeamStatics existingTeamStatic = existingTeamStaticOpt.get();
            existingTeamStatic.setTeam_id(teamStatic.getTeam_id());
            existingTeamStatic.setTournament_id(teamStatic.getTournament_id());
            existingTeamStatic.setPerformance_data(teamStatic.getPerformance_data());
            existingTeamStatic.setCreated_at(teamStatic.getCreated_at());
            existingTeamStatic.setUpdated_at(teamStatic.getUpdated_at());
            existingTeamStatic.setDeleted_at(teamStatic.getDeleted_at());

            return teamStaticsRepository.save(existingTeamStatic);
        } else {
            throw new RuntimeException("TeamStatic not found with ID: " + id);
        }
    }

    public void deleteById(Long id) {
        teamStaticsRepository.deleteById(id);
    }
}
