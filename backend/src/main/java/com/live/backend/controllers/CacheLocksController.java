package com.live.backend.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.live.backend.models.CacheLocks;
import com.live.backend.services.CacheLocksService;

@RestController
@RequestMapping("/api/cacheLocks")
public class CacheLocksController {

    @Autowired
    private CacheLocksService cacheLocksService;

    @GetMapping
    public List<CacheLocks> getAllCacheLocks() {
        return cacheLocksService.getAllCacheLocks();
    }

    @GetMapping("/{key}")
    public ResponseEntity<CacheLocks> getCacheLockByKey(@PathVariable String key) {
        Optional<CacheLocks> cacheLock = cacheLocksService.getCacheLockByKey(key);
        return cacheLock.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public CacheLocks createCacheLock(@RequestBody CacheLocks cacheLocks) {
        return cacheLocksService.createCacheLock(cacheLocks);
    }

    @PutMapping("/{key}")
    public ResponseEntity<CacheLocks> updateCacheLock(@PathVariable String key, @RequestBody CacheLocks cacheLocks) {
        try {
            CacheLocks updatedCacheLock = cacheLocksService.updateCacheLock(key, cacheLocks);
            return ResponseEntity.ok(updatedCacheLock);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{key}")
    public ResponseEntity<Void> deleteCacheLock(@PathVariable String key) {
        cacheLocksService.deleteCacheLock(key);
        return ResponseEntity.noContent().build();
    }
}
