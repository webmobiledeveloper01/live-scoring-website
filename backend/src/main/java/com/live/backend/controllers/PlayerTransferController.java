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

import com.live.backend.models.PlayerTransfers;
import com.live.backend.services.PlayerTransfersService;

@RestController
@RequestMapping("/api/playerTransfers")
public class PlayerTransferController {

    @Autowired
    private PlayerTransfersService playerTransfersService;

    @GetMapping
    public List<PlayerTransfers> getAllPlayerTransfers() {
        return playerTransfersService.getAllPlayerTransfers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<PlayerTransfers> getPlayerTransferById(@PathVariable Long id) {
        Optional<PlayerTransfers> playerTransfer = playerTransfersService.getPlayerTransferById(id);
        return playerTransfer.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public PlayerTransfers createPlayerTransfer(@RequestBody PlayerTransfers playerTransfers) {
        return playerTransfersService.createPlayerTransfer(playerTransfers);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PlayerTransfers> updatePlayerTransfer(@PathVariable Long id, @RequestBody PlayerTransfers playerTransfers) {
        try {
            PlayerTransfers updatedPlayerTransfer = playerTransfersService.updatePlayerTransfer(id, playerTransfers);
            return ResponseEntity.ok(updatedPlayerTransfer);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePlayerTransfer(@PathVariable Long id) {
        playerTransfersService.deletePlayerTransfer(id);
        return ResponseEntity.noContent().build();
    }
}
