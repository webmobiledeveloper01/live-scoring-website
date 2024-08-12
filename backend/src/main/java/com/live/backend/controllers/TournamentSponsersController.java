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

import com.live.backend.models.TournamentSponsers;
import com.live.backend.services.TournamentSponsersService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/tournament-sponsers")
public class TournamentSponsersController {

    @Autowired
    private TournamentSponsersService tournamentSponsersService;

    @GetMapping
    public ResponseEntity<List<TournamentSponsers>> getAllTournamentSponsers() {
        List<TournamentSponsers> sponsers = tournamentSponsersService.findAll();
        return new ResponseEntity<>(sponsers, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TournamentSponsers> getTournamentSponserById(@PathVariable Long id) {
        Optional<TournamentSponsers> sponser = tournamentSponsersService.findById(id);
        return sponser.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                      .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<TournamentSponsers> createTournamentSponser(@RequestBody TournamentSponsers tournamentSponser) {
        TournamentSponsers savedSponser = tournamentSponsersService.save(tournamentSponser);
        return new ResponseEntity<>(savedSponser, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TournamentSponsers> updateTournamentSponser(@PathVariable Long id, @RequestBody TournamentSponsers tournamentSponser) {
        try {
            TournamentSponsers updatedSponser = tournamentSponsersService.updateTournamentSponser(id, tournamentSponser);
            return new ResponseEntity<>(updatedSponser, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTournamentSponser(@PathVariable Long id) {
        tournamentSponsersService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
