package com.live.backend.services;

import java.time.LocalDateTime;
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
        job.setCreated_at(LocalDateTime.now());
        return jobsRepository.save(job);
    }

    public Jobs updateJob(Long id, Jobs job) {
        Optional<Jobs> existingJobOpt = jobsRepository.findById(id);
        if (existingJobOpt.isPresent()) {
            Jobs existingJob = existingJobOpt.get();
            existingJob.setQueue(job.getQueue());
            existingJob.setPayload(job.getPayload());
            existingJob.setAttempts(job.getAttempts());
            existingJob.setReserved_at(job.getReserved_at());
            existingJob.setAvailable_at(job.getAvailable_at());
            existingJob.setCreated_at(job.getCreated_at());

            return jobsRepository.save(existingJob);
        } else {
            throw new RuntimeException("Job not found with ID: " + id);
        }
    }

    public void deleteById(Long id) {
        jobsRepository.deleteById(id);
    }
}
