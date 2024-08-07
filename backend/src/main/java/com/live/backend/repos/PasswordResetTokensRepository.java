package com.live.backend.repos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.live.backend.models.PasswordResetTokens;

@Repository
public interface PasswordResetTokensRepository extends JpaRepository<PasswordResetTokens, String> {
    Optional<PasswordResetTokens> findByToken(String token);
}
