package com.live.backend.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.live.backend.models.Players;
import com.live.backend.services.PlayersService;

@RestController
@RequestMapping("/api/players")
public class PlayersController {

    @Autowired
    private PlayersService playersService;

    @GetMapping
    public ResponseEntity<List<Players>> getAllPlayers() {
        List<Players> players = playersService.findAll();
        return new ResponseEntity<>(players, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Players> getPlayerById(@PathVariable Long id) {
        Optional<Players> player = playersService.findById(id);
        return player.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                     .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<Players> createPlayer(@RequestBody Players player) {
        Players savedPlayer = playersService.save(player);
        return new ResponseEntity<>(savedPlayer, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Players> updatePlayer(@PathVariable Long id, @RequestBody Players player) {
        Optional<Players> existingPlayer = playersService.findById(id);
        if (existingPlayer.isPresent()) {
            Players updatedPlayer = playersService.save(player);
            return new ResponseEntity<>(updatedPlayer, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePlayer(@PathVariable Long id) {
        playersService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
