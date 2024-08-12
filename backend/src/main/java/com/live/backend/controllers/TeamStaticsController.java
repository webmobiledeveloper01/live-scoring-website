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

import com.live.backend.models.TeamStatics;
import com.live.backend.services.TeamStaticsService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/team-statics")
public class TeamStaticsController {

    @Autowired
    private TeamStaticsService teamStaticsService;

    @GetMapping
    public ResponseEntity<List<TeamStatics>> getAllTeamStatics() {
        List<TeamStatics> teamStatics = teamStaticsService.findAll();
        return new ResponseEntity<>(teamStatics, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TeamStatics> getTeamStaticById(@PathVariable Long id) {
        Optional<TeamStatics> teamStatic = teamStaticsService.findById(id);
        return teamStatic.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                         .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<TeamStatics> createTeamStatic(@RequestBody TeamStatics teamStatic) {
        TeamStatics savedTeamStatic = teamStaticsService.save(teamStatic);
        return new ResponseEntity<>(savedTeamStatic, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TeamStatics> updateTeamStatic(@PathVariable Long id, @RequestBody TeamStatics teamStatic) {
        Optional<TeamStatics> existingTeamStatic = teamStaticsService.findById(id);
        if (existingTeamStatic.isPresent()) {
            TeamStatics updatedTeamStatic = teamStaticsService.save(teamStatic);
            return new ResponseEntity<>(updatedTeamStatic, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTeamStatic(@PathVariable Long id) {
        teamStaticsService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
