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

import com.live.backend.models.Sessions;
import com.live.backend.services.SessionsService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/sessions")
public class SessionsController {

    @Autowired
    private SessionsService sessionsService;

    @GetMapping
    public ResponseEntity<List<Sessions>> getAllSessions() {
        List<Sessions> sessions = sessionsService.findAll();
        return new ResponseEntity<>(sessions, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Sessions> getSessionById(@PathVariable String id) {
        Optional<Sessions> session = sessionsService.findById(id);
        return session.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                      .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<Sessions> createSession(@RequestBody Sessions session) {
        Sessions savedSession = sessionsService.save(session);
        return new ResponseEntity<>(savedSession, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Sessions> updateSession(@PathVariable String id, @RequestBody Sessions session) {
        Optional<Sessions> existingSession = sessionsService.findById(id);
        if (existingSession.isPresent()) {
            Sessions updatedSession = sessionsService.updateSession(id, session);
            return new ResponseEntity<>(updatedSession, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSession(@PathVariable String id) {
        sessionsService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
