package com.live.backend.services;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.live.backend.models.PersonalAccessTokens;
import com.live.backend.repos.PersonalAccessTokensRepository;

@Service
public class PersonalAccessTokensService {

    @Autowired
    private PersonalAccessTokensRepository personalAccessTokensRepository;

    public List<PersonalAccessTokens> findAll() {
        return personalAccessTokensRepository.findAll();
    }

    public Optional<PersonalAccessTokens> findById(Long id) {
        return personalAccessTokensRepository.findById(id);
    }

    public PersonalAccessTokens save(PersonalAccessTokens personalAccessTokens) {
        return personalAccessTokensRepository.save(personalAccessTokens);
    }

    public void deleteById(Long id) {
        personalAccessTokensRepository.deleteById(id);
    }
}
