package com.live.backend.repos;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.live.backend.models.JobBatches;

@Repository
public interface JobBatchesRepository extends JpaRepository<JobBatches, String> {
}

