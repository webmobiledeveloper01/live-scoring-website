package com.live.backend.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.live.backend.models.Teams;
import com.live.backend.services.TeamsService;

@RestController
@RequestMapping("/api/teams")
public class TeamsController {

    @Autowired
    private TeamsService teamsService;

    @GetMapping
    public ResponseEntity<List<Teams>> getAllTeams() {
        List<Teams> teams = teamsService.findAll();
        return new ResponseEntity<>(teams, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Teams> getTeamById(@PathVariable Long id) {
        Optional<Teams> team = teamsService.findById(id);
        return team.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                   .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<Teams> createTeam(@RequestBody Teams team) {
        Teams savedTeam = teamsService.save(team);
        return new ResponseEntity<>(savedTeam, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Teams> updateTeam(@PathVariable Long id, @RequestBody Teams team) {
        Optional<Teams> existingTeam = teamsService.findById(id);
        if (existingTeam.isPresent()) {
            Teams updatedTeam = teamsService.save(team);
            return new ResponseEntity<>(updatedTeam, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTeam(@PathVariable Long id) {
        teamsService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
