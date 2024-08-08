package com.live.backend.services;

import java.time.LocalDateTime;
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
        playerStatics.setCreated_at(LocalDateTime.now());
        playerStatics.setUpdated_at(LocalDateTime.now());
        return playerStaticsRepository.save(playerStatics);
    }

    public PlayerStatics updatePlayerStatics(Long id, PlayerStatics playerStatics) {
        Optional<PlayerStatics> existingPlayerStaticsOpt = playerStaticsRepository.findById(id);
        if (existingPlayerStaticsOpt.isPresent()) {
            PlayerStatics existingPlayerStatics = existingPlayerStaticsOpt.get();
            existingPlayerStatics.setTeam_id(playerStatics.getTeam_id());
            existingPlayerStatics.setPlayer_id(playerStatics.getPlayer_id());
            existingPlayerStatics.setTournament_id(playerStatics.getTournament_id());
            existingPlayerStatics.setPerformance_data(playerStatics.getPerformance_data());
            existingPlayerStatics.setUpdated_at(LocalDateTime.now());

            return playerStaticsRepository.save(existingPlayerStatics);
        } else {
            throw new RuntimeException("PlayerStatics not found with ID: " + id);
        }
    }

    public void deleteById(Long id) {
        PlayerStatics ps = playerStaticsRepository.findById(id).orElse(null);
        if (ps != null) {
            ps.setDeleted_at(LocalDateTime.now());
            playerStaticsRepository.save(ps);
        }
    }
}
