package com.live.backend.services;

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
        return playerRolesRepository.save(playerRoles);
    }

    public PlayerRoles updatePlayerRole(Long id, PlayerRoles playerRoles) {
        if (playerRolesRepository.existsById(id)) {
            playerRoles.setId(id);
            return playerRolesRepository.save(playerRoles);
        } else {
            throw new RuntimeException("PlayerRoles not found with id " + id);
        }
    }

    public void deletePlayerRole(Long id) {
        playerRolesRepository.deleteById(id);
    }
}
