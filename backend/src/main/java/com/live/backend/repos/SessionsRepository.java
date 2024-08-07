package com.live.backend.repos;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.live.backend.models.Sessions;

@Repository
public interface SessionsRepository extends JpaRepository<Sessions, String> {
}
