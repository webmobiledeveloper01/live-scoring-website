package com.live.backend.services;

import java.util.List;
import java.util.Optional;
import java.time.LocalDateTime;

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
        playerRoles.setUpdated_at(LocalDateTime.now());
        playerRoles.setDeleted_at(null);
        return playerRolesRepository.save(playerRoles);
    }

    public PlayerRoles updatePlayerRole(Long id, PlayerRoles playerRoles) {
        Optional<PlayerRoles> existingPlayerRoleOpt = playerRolesRepository.findById(id);
        if (existingPlayerRoleOpt.isPresent()) {
            PlayerRoles existingPlayerRole = existingPlayerRoleOpt.get();
            existingPlayerRole.setName(playerRoles.getName());
            existingPlayerRole.setStatus(playerRoles.getStatus());
            existingPlayerRole.setUpdated_at(LocalDateTime.now());

            return playerRolesRepository.save(existingPlayerRole);
        } else {
            throw new RuntimeException("PlayerRoles not found with id " + id);
        }
    }

    public void deletePlayerRole(Long id) {
        PlayerRoles pr=playerRolesRepository.findById(id).orElse(null);
        if(pr!=null)
        {
            pr.setDeleted_at(LocalDateTime.now());
        }
    }
}
