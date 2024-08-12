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

import com.live.backend.models.TeamSquadForTournaments;
import com.live.backend.services.TeamSquadForTournamentsService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/team-squad")
public class TeamSquadForTournamentsController {

    @Autowired
    private TeamSquadForTournamentsService teamSquadForTournamentsService;

    @GetMapping
    public ResponseEntity<List<TeamSquadForTournaments>> getAllTeamSquad() {
        List<TeamSquadForTournaments> teamSquad = teamSquadForTournamentsService.findAll();
        return new ResponseEntity<>(teamSquad, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TeamSquadForTournaments> getTeamSquadById(@PathVariable Long id) {
        Optional<TeamSquadForTournaments> teamSquad = teamSquadForTournamentsService.findById(id);
        return teamSquad.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                         .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<TeamSquadForTournaments> createTeamSquad(@RequestBody TeamSquadForTournaments teamSquad) {
        TeamSquadForTournaments savedTeamSquad = teamSquadForTournamentsService.save(teamSquad);
        return new ResponseEntity<>(savedTeamSquad, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TeamSquadForTournaments> updateTeamSquad(@PathVariable Long id, @RequestBody TeamSquadForTournaments teamSquad) {
        Optional<TeamSquadForTournaments> existingTeamSquad = teamSquadForTournamentsService.findById(id);
        if (existingTeamSquad.isPresent()) {
            TeamSquadForTournaments updatedTeamSquad = teamSquadForTournamentsService.save(teamSquad);
            return new ResponseEntity<>(updatedTeamSquad, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTeamSquad(@PathVariable Long id) {
        teamSquadForTournamentsService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
