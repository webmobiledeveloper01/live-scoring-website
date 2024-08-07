package com.live.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.live.backend.models.Players;
import com.live.backend.repos.PlayersRepository;

@Service
public class PlayersService {

    @Autowired
    private PlayersRepository playersRepository;

    public List<Players> findAll() {
        return playersRepository.findAll();
    }

    public Optional<Players> findById(Long id) {
        return playersRepository.findById(id);
    }

    public Players save(Players player) {
        return playersRepository.save(player);
    }

    public void deleteById(Long id) {
        playersRepository.deleteById(id);
    }
}
