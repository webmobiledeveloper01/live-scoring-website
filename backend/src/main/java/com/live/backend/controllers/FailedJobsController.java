package com.live.backend.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.live.backend.models.FailedJobs;
import com.live.backend.services.FailedJobsService;

@RestController
@RequestMapping("/api/failed-jobs")
public class FailedJobsController {

    @Autowired
    private FailedJobsService failedJobsService;

    @GetMapping
    public ResponseEntity<List<FailedJobs>> getAllFailedJobs() {
        List<FailedJobs> failedJobs = failedJobsService.findAll();
        return new ResponseEntity<>(failedJobs, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<FailedJobs> getFailedJobById(@PathVariable Long id) {
        Optional<FailedJobs> failedJob = failedJobsService.findById(id);
        return failedJob.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                        .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<FailedJobs> createFailedJob(@RequestBody FailedJobs failedJobs) {
        FailedJobs savedFailedJob = failedJobsService.save(failedJobs);
        return new ResponseEntity<>(savedFailedJob, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<FailedJobs> updateFailedJob(@PathVariable Long id, @RequestBody FailedJobs failedJobs) {
        try {
            FailedJobs updatedFailedJob = failedJobsService.updateFailedJob(id, failedJobs);
            return new ResponseEntity<>(updatedFailedJob, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFailedJob(@PathVariable Long id) {
        failedJobsService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
