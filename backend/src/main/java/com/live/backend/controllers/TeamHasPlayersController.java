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

import com.live.backend.models.TeamHasPlayers;
import com.live.backend.services.TeamHasPlayersService;

@RestController
@RequestMapping("/api/teamHasPlayers")
public class TeamHasPlayersController {

    @Autowired
    private TeamHasPlayersService teamHasPlayersService;

    @GetMapping
    public List<TeamHasPlayers> getAllTeamHasPlayers() {
        return teamHasPlayersService.getAllTeamHasPlayers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<TeamHasPlayers> getTeamHasPlayerById(@PathVariable Long id) {
        Optional<TeamHasPlayers> teamHasPlayer = teamHasPlayersService.getTeamHasPlayerById(id);
        return teamHasPlayer.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public TeamHasPlayers createTeamHasPlayer(@RequestBody TeamHasPlayers teamHasPlayers) {
        return teamHasPlayersService.createTeamHasPlayer(teamHasPlayers);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TeamHasPlayers> updateTeamHasPlayer(@PathVariable Long id, @RequestBody TeamHasPlayers teamHasPlayers) {
        try {
            TeamHasPlayers updatedTeamHasPlayer = teamHasPlayersService.updateTeamHasPlayer(id, teamHasPlayers);
            return ResponseEntity.ok(updatedTeamHasPlayer);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTeamHasPlayer(@PathVariable Long id) {
        teamHasPlayersService.deleteTeamHasPlayer(id);
        return ResponseEntity.noContent().build();
    }
}
