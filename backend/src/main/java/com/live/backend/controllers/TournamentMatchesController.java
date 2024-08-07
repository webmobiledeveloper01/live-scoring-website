package com.live.backend.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.live.backend.models.TournamentMatches;
import com.live.backend.services.TournamentMatchesService;

@RestController
@RequestMapping("/api/tournament-matches")
public class TournamentMatchesController {

    @Autowired
    private TournamentMatchesService tournamentMatchesService;

    @GetMapping
    public ResponseEntity<List<TournamentMatches>> getAllTournamentMatches() {
        List<TournamentMatches> matches = tournamentMatchesService.findAll();
        return new ResponseEntity<>(matches, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TournamentMatches> getTournamentMatchById(@PathVariable Long id) {
        Optional<TournamentMatches> match = tournamentMatchesService.findById(id);
        return match.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                    .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<TournamentMatches> createTournamentMatch(@RequestBody TournamentMatches tournamentMatch) {
        TournamentMatches savedMatch = tournamentMatchesService.save(tournamentMatch);
        return new ResponseEntity<>(savedMatch, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TournamentMatches> updateTournamentMatch(@PathVariable Long id, @RequestBody TournamentMatches tournamentMatch) {
        Optional<TournamentMatches> existingMatch = tournamentMatchesService.findById(id);
        if (existingMatch.isPresent()) {
            TournamentMatches updatedMatch = tournamentMatchesService.save(tournamentMatch);
            return new ResponseEntity<>(updatedMatch, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTournamentMatch(@PathVariable Long id) {
        tournamentMatchesService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
