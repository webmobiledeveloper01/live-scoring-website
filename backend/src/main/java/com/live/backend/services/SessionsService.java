package com.live.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.live.backend.models.Sessions;
import com.live.backend.models.Users; 
import com.live.backend.repos.SessionsRepository;
import com.live.backend.repos.UsersRepository; 

@Service
public class SessionsService {

    @Autowired
    private SessionsRepository sessionsRepository;

    @Autowired
    private UsersRepository usersRepository;

    public List<Sessions> findAll() {
        return sessionsRepository.findAll();
    }

    public Optional<Sessions> findById(String id) {
        return sessionsRepository.findById(id);
    }

    public Sessions save(Sessions session) {
        return sessionsRepository.save(session);
    }

    public Sessions updateSession(String id, Sessions session) {
        Optional<Sessions> existingSessionOpt = sessionsRepository.findById(id);
        if (existingSessionOpt.isPresent()) {
            Sessions existingSession = existingSessionOpt.get();
            existingSession.setIp_address(session.getIp_address());
            existingSession.setUser_agent(session.getUser_agent());
            existingSession.setPayload(session.getPayload());
            existingSession.setLast_activity(session.getLast_activity());

            // Fetch and set the user if it exists
            if (session.getUser_id() != null) {
                Optional<Users> user = usersRepository.findById(session.getUser_id());
                if (user.isPresent()) {
                    existingSession.setUser_id(user.get().getId()); // Set user_id from Users entity
                } else {
                    throw new RuntimeException("User not found with ID: " + session.getUser_id());
                }
            }

            return sessionsRepository.save(existingSession);
        } else {
            throw new RuntimeException("Session not found with ID: " + id);
        }
    }

    public void deleteById(String id) {
        sessionsRepository.deleteById(id);
    }
}
