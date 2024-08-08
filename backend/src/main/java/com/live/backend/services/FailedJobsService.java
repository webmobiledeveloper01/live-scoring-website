package com.live.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.live.backend.models.FailedJobs;
import com.live.backend.repos.FailedJobsRepository;

@Service
public class FailedJobsService {

    @Autowired
    private FailedJobsRepository failedJobsRepository;

    public List<FailedJobs> findAll() {
        return failedJobsRepository.findAll();
    }

    public Optional<FailedJobs> findById(Long id) {
        return failedJobsRepository.findById(id);
    }

    public FailedJobs save(FailedJobs failedJobs) {
        return failedJobsRepository.save(failedJobs);
    }

    public FailedJobs updateFailedJob(Long id, FailedJobs failedJobs) {
        Optional<FailedJobs> existingFailedJobOpt = failedJobsRepository.findById(id);
        if (existingFailedJobOpt.isPresent()) {
            FailedJobs existingFailedJob = existingFailedJobOpt.get();
            existingFailedJob.setUuid(failedJobs.getUuid());
            existingFailedJob.setConnection(failedJobs.getConnection());
            existingFailedJob.setQueue(failedJobs.getQueue());
            existingFailedJob.setPayload(failedJobs.getPayload());
            existingFailedJob.setException(failedJobs.getException());
            existingFailedJob.setFailed_at(failedJobs.getFailed_at());

            return failedJobsRepository.save(existingFailedJob);
        } else {
            throw new RuntimeException("FailedJob not found with ID: " + id);
        }
    }

    public void deleteById(Long id) {
        failedJobsRepository.deleteById(id);
    }
}
