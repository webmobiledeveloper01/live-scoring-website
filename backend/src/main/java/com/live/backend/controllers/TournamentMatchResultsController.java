package com.live.backend.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.live.backend.models.TournamentMatchResults;
import com.live.backend.services.TournamentMatchResultsService;

@RestController
@RequestMapping("/api/tournament-match-results")
public class TournamentMatchResultsController {

    @Autowired
    private TournamentMatchResultsService tournamentMatchResultsService;

    @GetMapping
    public ResponseEntity<List<TournamentMatchResults>> getAllTournamentMatchResults() {
        List<TournamentMatchResults> results = tournamentMatchResultsService.findAll();
        return new ResponseEntity<>(results, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TournamentMatchResults> getTournamentMatchResultById(@PathVariable Long id) {
        Optional<TournamentMatchResults> result = tournamentMatchResultsService.findById(id);
        return result.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                     .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<TournamentMatchResults> createTournamentMatchResult(@RequestBody TournamentMatchResults tournamentMatchResults) {
        TournamentMatchResults savedResult = tournamentMatchResultsService.save(tournamentMatchResults);
        return new ResponseEntity<>(savedResult, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TournamentMatchResults> updateTournamentMatchResult(@PathVariable Long id, @RequestBody TournamentMatchResults tournamentMatchResults) {
        try {
            TournamentMatchResults updatedResult = tournamentMatchResultsService.updateTournamentMatchResult(id, tournamentMatchResults);
            return new ResponseEntity<>(updatedResult, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTournamentMatchResult(@PathVariable Long id) {
        tournamentMatchResultsService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
