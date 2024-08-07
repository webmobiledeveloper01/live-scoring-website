package com.live.backend.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.live.backend.models.PasswordResetTokens;
import com.live.backend.services.PasswordResetTokensService;

@RestController
@RequestMapping("/api/passwordResetTokens")
public class PasswordResetTokensController {

    @Autowired
    private PasswordResetTokensService passwordResetTokensService;

    @GetMapping
    public List<PasswordResetTokens> getAllPasswordResetTokens() {
        return passwordResetTokensService.getAllPasswordResetTokens();
    }

    @GetMapping("/{email}")
    public ResponseEntity<PasswordResetTokens> getPasswordResetTokenByEmail(@PathVariable String email) {
        Optional<PasswordResetTokens> passwordResetToken = passwordResetTokensService.getPasswordResetTokenByEmail(email);
        return passwordResetToken.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/token/{token}")
    public ResponseEntity<PasswordResetTokens> getPasswordResetTokenByToken(@PathVariable String token) {
        Optional<PasswordResetTokens> passwordResetToken = passwordResetTokensService.getPasswordResetTokenByToken(token);
        return passwordResetToken.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public PasswordResetTokens createPasswordResetToken(@RequestBody PasswordResetTokens passwordResetToken) {
        return passwordResetTokensService.createPasswordResetToken(passwordResetToken);
    }

    @PutMapping("/{email}")
    public ResponseEntity<PasswordResetTokens> updatePasswordResetToken(@PathVariable String email, @RequestBody PasswordResetTokens passwordResetToken) {
        try {
            PasswordResetTokens updatedPasswordResetToken = passwordResetTokensService.updatePasswordResetToken(email, passwordResetToken);
            return ResponseEntity.ok(updatedPasswordResetToken);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{email}")
    public ResponseEntity<Void> deletePasswordResetToken(@PathVariable String email) {
        passwordResetTokensService.deletePasswordResetToken(email);
        return ResponseEntity.noContent().build();
    }
}
