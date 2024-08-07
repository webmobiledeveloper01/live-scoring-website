package com.live.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.live.backend.models.OfficialUpdate;
import com.live.backend.repos.OfficialUpdateRepository;

@Service
public class OfficialUpdateService {

    @Autowired
    private OfficialUpdateRepository officialUpdateRepository;

    public List<OfficialUpdate> findAll() {
        return officialUpdateRepository.findAll();
    }

    public Optional<OfficialUpdate> findById(Long id) {
        return officialUpdateRepository.findById(id);
    }

    public OfficialUpdate save(OfficialUpdate officialUpdate) {
        return officialUpdateRepository.save(officialUpdate);
    }

    public void deleteById(Long id) {
        officialUpdateRepository.deleteById(id);
    }
}
