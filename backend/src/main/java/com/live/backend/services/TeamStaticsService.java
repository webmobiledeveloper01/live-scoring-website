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

    public void deleteById(Long id) {
        teamStaticsRepository.deleteById(id);
    }
}
