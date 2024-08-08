package com.live.backend.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.live.backend.models.PersonalAccessTokens;
import com.live.backend.services.PersonalAccessTokensService;

@RestController
@RequestMapping("/api/personal-access-tokens")
public class PersonalAccessTokensController {

    @Autowired
    private PersonalAccessTokensService personalAccessTokensService;

    @GetMapping
    public ResponseEntity<List<PersonalAccessTokens>> getAllPersonalAccessTokens() {
        List<PersonalAccessTokens> tokens = personalAccessTokensService.findAll();
        return new ResponseEntity<>(tokens, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PersonalAccessTokens> getPersonalAccessTokenById(@PathVariable Long id) {
        Optional<PersonalAccessTokens> token = personalAccessTokensService.findById(id);
        return token.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                    .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<PersonalAccessTokens> createPersonalAccessToken(@RequestBody PersonalAccessTokens personalAccessTokens) {
        PersonalAccessTokens savedToken = personalAccessTokensService.save(personalAccessTokens);
        return new ResponseEntity<>(savedToken, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PersonalAccessTokens> updatePersonalAccessToken(@PathVariable Long id, @RequestBody PersonalAccessTokens personalAccessTokens) {
        Optional<PersonalAccessTokens> existingToken = personalAccessTokensService.findById(id);
        if (existingToken.isPresent()) {
            PersonalAccessTokens updatedToken = personalAccessTokensService.updatePersonalAccessToken(id, personalAccessTokens);
            return new ResponseEntity<>(updatedToken, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePersonalAccessToken(@PathVariable Long id) {
        personalAccessTokensService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
