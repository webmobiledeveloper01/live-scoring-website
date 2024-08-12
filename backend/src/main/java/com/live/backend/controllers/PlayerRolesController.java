package com.live.backend.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.live.backend.models.PlayerRoles;
import com.live.backend.services.PlayerRolesService;

@RestController
@RequestMapping("/api/playerRoles")
@CrossOrigin("*")
public class PlayerRolesController {

    @Autowired
    private PlayerRolesService playerRolesService;

    @GetMapping
    public ResponseEntity<List<PlayerRoles>> getAllPlayerRoles() {
        List<PlayerRoles> playerRoles = playerRolesService.getAllPlayerRoles();
        return ResponseEntity.ok(playerRoles);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PlayerRoles> getPlayerRoleById(@PathVariable Long id) {
        Optional<PlayerRoles> playerRole = playerRolesService.getPlayerRoleById(id);
        return playerRole.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<PlayerRoles> createPlayerRole(@RequestBody PlayerRoles playerRoles) {
        PlayerRoles createdPlayerRole = playerRolesService.createPlayerRole(playerRoles);
        return ResponseEntity.status(201).body(createdPlayerRole);
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
