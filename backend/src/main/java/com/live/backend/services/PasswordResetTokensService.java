package com.live.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.live.backend.models.PasswordResetTokens;
import com.live.backend.repos.PasswordResetTokensRepository;

@Service
public class PasswordResetTokensService {

    @Autowired
    private PasswordResetTokensRepository passwordResetTokensRepository;

    public List<PasswordResetTokens> getAllPasswordResetTokens() {
        return passwordResetTokensRepository.findAll();
    }

    public Optional<PasswordResetTokens> getPasswordResetTokenByEmail(String email) {
        return passwordResetTokensRepository.findById(email);
    }

    public Optional<PasswordResetTokens> getPasswordResetTokenByToken(String token) {
        return passwordResetTokensRepository.findByToken(token);
    }

    public PasswordResetTokens createPasswordResetToken(PasswordResetTokens passwordResetToken) {
        return passwordResetTokensRepository.save(passwordResetToken);
    }

    public PasswordResetTokens updatePasswordResetToken(String email, PasswordResetTokens passwordResetToken) {
        if (passwordResetTokensRepository.existsById(email)) {
            passwordResetToken.setEmail(email);
            return passwordResetTokensRepository.save(passwordResetToken);
        } else {
            throw new RuntimeException("PasswordResetToken not found with email " + email);
        }
    }

    public void deletePasswordResetToken(String email) {
        passwordResetTokensRepository.deleteById(email);
    }
}
