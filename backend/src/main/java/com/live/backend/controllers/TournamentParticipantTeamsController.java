package com.live.backend.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.live.backend.models.TournamentParticipantTeams;
import com.live.backend.services.TournamentParticipantTeamsService;

@RestController
@RequestMapping("/api/tournament-participant-teams")
public class TournamentParticipantTeamsController {

    @Autowired
    private TournamentParticipantTeamsService tournamentParticipantTeamsService;

    @GetMapping
    public ResponseEntity<List<TournamentParticipantTeams>> getAllTournamentParticipantTeams() {
        List<TournamentParticipantTeams> participantTeams = tournamentParticipantTeamsService.findAll();
        return new ResponseEntity<>(participantTeams, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TournamentParticipantTeams> getTournamentParticipantTeamById(@PathVariable Long id) {
        Optional<TournamentParticipantTeams> participantTeam = tournamentParticipantTeamsService.findById(id);
        return participantTeam.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                              .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<TournamentParticipantTeams> createTournamentParticipantTeam(@RequestBody TournamentParticipantTeams participantTeam) {
        TournamentParticipantTeams savedParticipantTeam = tournamentParticipantTeamsService.save(participantTeam);
        return new ResponseEntity<>(savedParticipantTeam, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TournamentParticipantTeams> updateTournamentParticipantTeam(@PathVariable Long id, @RequestBody TournamentParticipantTeams participantTeam) {
        Optional<TournamentParticipantTeams> existingParticipantTeam = tournamentParticipantTeamsService.findById(id);
        if (existingParticipantTeam.isPresent()) {
            TournamentParticipantTeams updatedParticipantTeam = tournamentParticipantTeamsService.save(participantTeam);
            return new ResponseEntity<>(updatedParticipantTeam, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTournamentParticipantTeam(@PathVariable Long id) {
        tournamentParticipantTeamsService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
