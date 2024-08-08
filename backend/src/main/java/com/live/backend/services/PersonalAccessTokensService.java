package com.live.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.live.backend.models.PersonalAccessTokens;
import com.live.backend.models.Users; // Assuming you have a Users model
import com.live.backend.repos.PersonalAccessTokensRepository;
import com.live.backend.repos.UsersRepository; // Assuming you have a UsersRepository

@Service
public class PersonalAccessTokensService {

    @Autowired
    private PersonalAccessTokensRepository personalAccessTokensRepository;

    @Autowired
    private UsersRepository usersRepository; // For fetching user information

    public List<PersonalAccessTokens> findAll() {
        return personalAccessTokensRepository.findAll();
    }

    public Optional<PersonalAccessTokens> findById(Long id) {
        return personalAccessTokensRepository.findById(id);
    }

    public PersonalAccessTokens save(PersonalAccessTokens personalAccessTokens) {
        return personalAccessTokensRepository.save(personalAccessTokens);
    }

    public PersonalAccessTokens updatePersonalAccessToken(Long id, PersonalAccessTokens personalAccessTokens) {
        Optional<PersonalAccessTokens> existingTokenOpt = personalAccessTokensRepository.findById(id);
        if (existingTokenOpt.isPresent()) {
            PersonalAccessTokens existingToken = existingTokenOpt.get();
            existingToken.setTokenable_type(personalAccessTokens.getTokenable_type());
            existingToken.setTokenable_id(personalAccessTokens.getTokenable_id());
            existingToken.setName(personalAccessTokens.getName());
            existingToken.setToken(personalAccessTokens.getToken());
            existingToken.setAbilities(personalAccessTokens.getAbilities());
            existingToken.setLast_used_at(personalAccessTokens.getLast_used_at());
            existingToken.setExpires_at(personalAccessTokens.getExpires_at());
            existingToken.setCreated_at(personalAccessTokens.getCreated_at());
            existingToken.setUpdated_at(personalAccessTokens.getUpdated_at());

            return personalAccessTokensRepository.save(existingToken);
        } else {
            throw new RuntimeException("PersonalAccessToken not found with ID: " + id);
        }
    }

    public void deleteById(Long id) {
        personalAccessTokensRepository.deleteById(id);
    }
}
