package com.live.backend.services;

import com.live.backend.models.Teams;
import com.live.backend.repos.TeamsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class TeamsService {

    @Autowired
    private TeamsRepository teamsRepository;

    public List<Teams> findAll() {
        return teamsRepository.findAll();
    }

    public Optional<Teams> findById(Long id) {
        return teamsRepository.findById(id);
    }

    public Teams save(Teams team) {
        team.setCreated_at(LocalDateTime.now());
        team.setUpdated_at(LocalDateTime.now());
        return teamsRepository.save(team);
    }

    public Teams update(Teams team) {
        Teams existingTeam = teamsRepository.findById(team.getId())
                .orElseThrow(() -> new RuntimeException("Team not found"));
        
        existingTeam.setName(team.getName());
        existingTeam.setLogo(team.getLogo());
        existingTeam.setDescription(team.getDescription());
        existingTeam.setContact_details(team.getContact_details());
        existingTeam.setStatus(team.getStatus());
        existingTeam.setUpdated_at(LocalDateTime.now());
        
        return teamsRepository.save(existingTeam);
    }

    public void deleteById(Long id) {
        teamsRepository.deleteById(id);
    }
}