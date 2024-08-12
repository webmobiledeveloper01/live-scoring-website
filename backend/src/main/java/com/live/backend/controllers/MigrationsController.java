package com.live.backend.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.live.backend.models.Migrations;
import com.live.backend.services.MigrationsService;

@RestController
@RequestMapping("/api/migrations")
@CrossOrigin("*")
public class MigrationsController {

    @Autowired
    private MigrationsService migrationsService;

    @GetMapping
    public ResponseEntity<List<Migrations>> getAllMigrations() {
        List<Migrations> migrations = migrationsService.findAll();
        return new ResponseEntity<>(migrations, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Migrations> getMigrationById(@PathVariable Integer id) {
        Optional<Migrations> migration = migrationsService.findById(id);
        return migration.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                        .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<Migrations> createMigration(@RequestBody Migrations migration) {
        Migrations savedMigration = migrationsService.save(migration);
        return new ResponseEntity<>(savedMigration, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Migrations> updateMigration(@PathVariable Integer id, @RequestBody Migrations migration) {
        Optional<Migrations> existingMigration = migrationsService.findById(id);
        if (existingMigration.isPresent()) {
            Migrations updatedMigration = migrationsService.save(migration);
            return new ResponseEntity<>(updatedMigration, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMigration(@PathVariable Integer id) {
        migrationsService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

