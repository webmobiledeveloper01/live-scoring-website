package com.live.backend.services;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.live.backend.models.LiveScores;
import com.live.backend.repos.LiveScoresRepository;

@Service
public class LiveScoresService {

    @Autowired
    private LiveScoresRepository liveScoresRepository;

    public List<LiveScores> findAll() {
        return liveScoresRepository.findAll();
    }

    public Optional<LiveScores> findById(Long id) {
        return liveScoresRepository.findById(id);
    }

    public LiveScores save(LiveScores liveScores) {
        return liveScoresRepository.save(liveScores);
    }

    public void deleteById(Long id) {
        liveScoresRepository.deleteById(id);
    }
}
