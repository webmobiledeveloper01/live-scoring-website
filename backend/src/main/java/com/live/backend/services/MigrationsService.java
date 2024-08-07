package com.live.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.live.backend.models.Migrations;
import com.live.backend.repos.MigrationsRepository;

@Service
public class MigrationsService {

    @Autowired
    private MigrationsRepository migrationsRepository;

    public List<Migrations> findAll() {
        return migrationsRepository.findAll();
    }

    public Optional<Migrations> findById(Integer id) {
        return migrationsRepository.findById(id);
    }

    public Migrations save(Migrations migration) {
        return migrationsRepository.save(migration);
    }

    public void deleteById(Integer id) {
        migrationsRepository.deleteById(id);
    }
}
