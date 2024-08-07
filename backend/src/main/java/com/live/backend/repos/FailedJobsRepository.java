package com.live.backend.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.live.backend.models.FailedJobs;

@Repository
public interface FailedJobsRepository extends JpaRepository<FailedJobs, Long> {
}