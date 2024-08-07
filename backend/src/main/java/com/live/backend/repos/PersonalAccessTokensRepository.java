package com.live.backend.repos;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.live.backend.models.PersonalAccessTokens;

@Repository
public interface PersonalAccessTokensRepository extends JpaRepository<PersonalAccessTokens, Long> {
}

