package com.live.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.live.backend.models.Tournaments;
import com.live.backend.repos.TournamentsRepository;

@Service
public class TournamentsService {

    @Autowired
    private TournamentsRepository tournamentsRepository;

    public List<Tournaments> findAll() {
        return tournamentsRepository.findAll();
    }

    public Optional<Tournaments> findById(Long id) {
        return tournamentsRepository.findById(id);
    }

    public Tournaments save(Tournaments tournament) {
        return tournamentsRepository.save(tournament);
    }

    public void deleteById(Long id) {
        tournamentsRepository.deleteById(id);
    }
}
