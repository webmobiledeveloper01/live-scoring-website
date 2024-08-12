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

import com.live.backend.models.Tournaments;
import com.live.backend.services.TournamentsService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/tournaments")
public class TournamentsController {

    @Autowired
    private TournamentsService tournamentsService;

    @GetMapping
    public ResponseEntity<List<Tournaments>> getAllTournaments() {
        List<Tournaments> tournaments = tournamentsService.findAll();
        return new ResponseEntity<>(tournaments, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Tournaments> getTournamentById(@PathVariable Long id) {
        Optional<Tournaments> tournament = tournamentsService.findById(id);
        return tournament.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                         .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<Tournaments> createTournament(@RequestBody Tournaments tournament) {
        Tournaments savedTournament = tournamentsService.save(tournament);
        return new ResponseEntity<>(savedTournament, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Tournaments> updateTournament(@PathVariable Long id, @RequestBody Tournaments tournament) {
        Optional<Tournaments> existingTournament = tournamentsService.findById(id);
        if (existingTournament.isPresent()) {
            Tournaments updatedTournament = tournamentsService.save(tournament);
            return new ResponseEntity<>(updatedTournament, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTournament(@PathVariable Long id) {
        tournamentsService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
