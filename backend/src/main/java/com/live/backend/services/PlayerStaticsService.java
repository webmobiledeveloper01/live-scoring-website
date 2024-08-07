package com.live.backend.services;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.live.backend.models.PlayerStatics;
import com.live.backend.repos.PlayerStaticsRepository;

@Service
public class PlayerStaticsService {

    @Autowired
    private PlayerStaticsRepository playerStaticsRepository;

    public List<PlayerStatics> findAll() {
        return playerStaticsRepository.findAll();
    }

    public Optional<PlayerStatics> findById(Long id) {
        return playerStaticsRepository.findById(id);
    }

    public PlayerStatics save(PlayerStatics playerStatics) {
        return playerStaticsRepository.save(playerStatics);
    }

    public void deleteById(Long id) {
        playerStaticsRepository.deleteById(id);
    }
}

