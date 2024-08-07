package com.live.backend.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.live.backend.models.PlayerRoles;
import com.live.backend.services.PlayerRolesService;

@RestController
@RequestMapping("/api/playerRoles")
public class PlayerRolesController {

    @Autowired
    private PlayerRolesService playerRolesService;

    @GetMapping
    public List<PlayerRoles> getAllPlayerRoles() {
        return playerRolesService.getAllPlayerRoles();
    }

    @GetMapping("/{id}")
    public ResponseEntity<PlayerRoles> getPlayerRoleById(@PathVariable Long id) {
        Optional<PlayerRoles> playerRole = playerRolesService.getPlayerRoleById(id);
        return playerRole.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public PlayerRoles createPlayerRole(@RequestBody PlayerRoles playerRoles) {
        return playerRolesService.createPlayerRole(playerRoles);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PlayerRoles> updatePlayerRole(@PathVariable Long id, @RequestBody PlayerRoles playerRoles) {
        try {
            PlayerRoles updatedPlayerRole = playerRolesService.updatePlayerRole(id, playerRoles);
            return ResponseEntity.ok(updatedPlayerRole);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePlayerRole(@PathVariable Long id) {
        playerRolesService.deletePlayerRole(id);
        return ResponseEntity.noContent().build();
    }
}
