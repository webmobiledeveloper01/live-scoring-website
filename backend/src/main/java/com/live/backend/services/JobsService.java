package com.live.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.live.backend.models.Jobs;
import com.live.backend.repos.JobsRepository;

@Service
public class JobsService {

    @Autowired
    private JobsRepository jobsRepository;

    public List<Jobs> findAll() {
        return jobsRepository.findAll();
    }

    public Optional<Jobs> findById(Long id) {
        return jobsRepository.findById(id);
    }

    public Jobs save(Jobs job) {
        return jobsRepository.save(job);
    }

    public void deleteById(Long id) {
        jobsRepository.deleteById(id);
    }
}
