package com.live.backend.repos;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.live.backend.models.OfficialUpdate;

@Repository
public interface OfficialUpdateRepository extends JpaRepository<OfficialUpdate, Long> {
}
