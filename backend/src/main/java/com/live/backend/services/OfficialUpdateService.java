package com.live.backend.services;

import java.time.LocalDateTime;
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
        officialUpdate.setCreatedAt(LocalDateTime.now());
        officialUpdate.setUpdatedAt(LocalDateTime.now());
        return officialUpdateRepository.save(officialUpdate);
    }

    public OfficialUpdate updateOfficialUpdate(Long id, OfficialUpdate officialUpdate) {
        Optional<OfficialUpdate> existingUpdateOpt = officialUpdateRepository.findById(id);
        if (existingUpdateOpt.isPresent()) {
            OfficialUpdate existingUpdate = existingUpdateOpt.get();
            existingUpdate.setTitle(officialUpdate.getTitle());
            existingUpdate.setDescription(officialUpdate.getDescription());
            existingUpdate.setStatus(officialUpdate.getStatus());
            existingUpdate.setUpdatedAt(LocalDateTime.now());

            return officialUpdateRepository.save(existingUpdate);
        } else {
            throw new RuntimeException("OfficialUpdate not found with ID: " + id);
        }
    }

    public void deleteById(Long id) {
        officialUpdateRepository.deleteById(id);
    }
}
