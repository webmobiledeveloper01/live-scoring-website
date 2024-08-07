package com.live.backend.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.live.backend.models.PlayerRoles;

@Repository
public interface PlayerRolesRepository extends JpaRepository<PlayerRoles, Long> {
}
