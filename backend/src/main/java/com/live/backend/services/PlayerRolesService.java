package com.live.backend.services;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.live.backend.models.PlayerRoles;
import com.live.backend.repos.PlayerRolesRepository;

@Service
public class PlayerRolesService {

    @Autowired
    private PlayerRolesRepository playerRolesRepository;

    public List<PlayerRoles> getAllPlayerRoles() {
        return playerRolesRepository.findAll();
    }

    public Optional<PlayerRoles> getPlayerRoleById(Long id) {
        return playerRolesRepository.findById(id);
    }

    public PlayerRoles createPlayerRole(PlayerRoles playerRoles) {
        playerRoles.setCreated_at(LocalDateTime.now());
        playerRoles.setStatus(1);
        return playerRolesRepository.save(playerRoles);
    }

    public PlayerRoles updatePlayerRole(Long id, PlayerRoles playerRoles) {
        if (playerRolesRepository.existsById(id)) {
            playerRoles.setId(id);
            playerRoles.setUpdated_at(LocalDateTime.now());
            return playerRolesRepository.save(playerRoles);
        } else {
            throw new RuntimeException("PlayerRoles not found with id " + id);
        }
    }

    public void deletePlayerRole(Long id) {
        Optional<PlayerRoles> playerRole = playerRolesRepository.findById(id);
        if (playerRole.isPresent()) {
            PlayerRoles pr = playerRole.get();
            pr.setStatus(0);
            pr.setDeleted_at(LocalDateTime.now());
            playerRolesRepository.save(pr);
        } else {
            throw new RuntimeException("PlayerRoles not found with id " + id);
        }
    }
}
