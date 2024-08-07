package com.live.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.live.backend.models.JobBatches;
import com.live.backend.repos.JobBatchesRepository;

@Service
public class JobBatchesService {

    @Autowired
    private JobBatchesRepository jobBatchesRepository;

    public List<JobBatches> findAll() {
        return jobBatchesRepository.findAll();
    }

    public Optional<JobBatches> findById(String id) {
        return jobBatchesRepository.findById(id);
    }

    public JobBatches save(JobBatches jobBatches) {
        return jobBatchesRepository.save(jobBatches);
    }

    public void deleteById(String id) {
        jobBatchesRepository.deleteById(id);
    }
}
