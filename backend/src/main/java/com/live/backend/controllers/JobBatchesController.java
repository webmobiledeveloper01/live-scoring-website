package com.live.backend.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.live.backend.models.JobBatches;
import com.live.backend.services.JobBatchesService;

@RestController
@RequestMapping("/api/job-batches")
public class JobBatchesController {

    @Autowired
    private JobBatchesService jobBatchesService;

    @GetMapping
    public ResponseEntity<List<JobBatches>> getAllJobBatches() {
        List<JobBatches> jobBatches = jobBatchesService.findAll();
        return new ResponseEntity<>(jobBatches, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<JobBatches> getJobBatchesById(@PathVariable String id) {
        Optional<JobBatches> jobBatches = jobBatchesService.findById(id);
        return jobBatches.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                         .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<JobBatches> createJobBatches(@RequestBody JobBatches jobBatches) {
        JobBatches savedJobBatches = jobBatchesService.save(jobBatches);
        return new ResponseEntity<>(savedJobBatches, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<JobBatches> updateJobBatches(@PathVariable String id, @RequestBody JobBatches jobBatches) {
        try {
            JobBatches updatedJobBatches = jobBatchesService.updateJobBatches(id, jobBatches);
            return new ResponseEntity<>(updatedJobBatches, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteJobBatches(@PathVariable String id) {
        jobBatchesService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
