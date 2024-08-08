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

    public JobBatches updateJobBatches(String id, JobBatches jobBatches) {
        Optional<JobBatches> existingJobBatchOpt = jobBatchesRepository.findById(id);
        if (existingJobBatchOpt.isPresent()) {
            JobBatches existingJobBatch = existingJobBatchOpt.get();
            existingJobBatch.setName(jobBatches.getName());
            existingJobBatch.setTotal_jobs(jobBatches.getTotal_jobs());
            existingJobBatch.setPending_jobs(jobBatches.getPending_jobs());
            existingJobBatch.setFailed_jobs(jobBatches.getFailed_jobs());
            existingJobBatch.setFailed_job_ids(jobBatches.getFailed_job_ids());
            existingJobBatch.setOptions(jobBatches.getOptions());
            existingJobBatch.setCancelled_at(jobBatches.getCancelled_at());
            existingJobBatch.setCreated_at(jobBatches.getCreated_at());
            existingJobBatch.setFinished_at(jobBatches.getFinished_at());

            return jobBatchesRepository.save(existingJobBatch);
        } else {
            throw new RuntimeException("JobBatches not found with ID: " + id);
        }
    }

    public void deleteById(String id) {
        jobBatchesRepository.deleteById(id);
    }
}
