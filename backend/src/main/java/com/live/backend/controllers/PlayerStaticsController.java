package com.live.backend.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.live.backend.models.PlayerStatics;
import com.live.backend.services.PlayerStaticsService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/player-statistics")
public class PlayerStaticsController {

    @Autowired
    private PlayerStaticsService playerStaticsService;

    @GetMapping
    public ResponseEntity<List<PlayerStatics>> getAllPlayerStatics() {
        List<PlayerStatics> playerStatics = playerStaticsService.findAll();
        return new ResponseEntity<>(playerStatics, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PlayerStatics> getPlayerStaticsById(@PathVariable Long id) {
        Optional<PlayerStatics> playerStatics = playerStaticsService.findById(id);
        return playerStatics.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                            .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<PlayerStatics> createPlayerStatics(@RequestBody PlayerStatics playerStatics) {
        PlayerStatics savedPlayerStatics = playerStaticsService.save(playerStatics);
        return new ResponseEntity<>(savedPlayerStatics, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PlayerStatics> updatePlayerStatics(@PathVariable Long id, @RequestBody PlayerStatics playerStatics) {
        try {
            PlayerStatics updatedPlayerStatics = playerStaticsService.updatePlayerStatics(id, playerStatics);
            return new ResponseEntity<>(updatedPlayerStatics, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePlayerStatics(@PathVariable Long id) {
        playerStaticsService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
