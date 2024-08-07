package com.live.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.live.backend.models.Teams;
import com.live.backend.repos.TeamsRepository;

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
        return teamsRepository.save(team);
    }

    public void deleteById(Long id) {
        teamsRepository.deleteById(id);
    }
}
