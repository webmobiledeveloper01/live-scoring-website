package com.live.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.live.backend.models.Sessions;
import com.live.backend.repos.SessionsRepository;

@Service
public class SessionsService {

    @Autowired
    private SessionsRepository sessionsRepository;

    public List<Sessions> findAll() {
        return sessionsRepository.findAll();
    }

    public Optional<Sessions> findById(String id) {
        return sessionsRepository.findById(id);
    }

    public Sessions save(Sessions session) {
        return sessionsRepository.save(session);
    }

    public void deleteById(String id) {
        sessionsRepository.deleteById(id);
    }
}
