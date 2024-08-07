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

import com.live.backend.models.Cache;
import com.live.backend.services.CacheService;

@RestController
@RequestMapping("/api/cache")
public class CacheController {

    @Autowired
    private CacheService cacheService;

    @GetMapping
    public List<Cache> getAllCacheEntries() {
        return cacheService.getAllCacheEntries();
    }

    @GetMapping("/{key}")
    public ResponseEntity<Cache> getCacheEntryByKey(@PathVariable String key) {
        Optional<Cache> cache = cacheService.getCacheEntryByKey(key);
        return cache.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Cache createCacheEntry(@RequestBody Cache cache) {
        return cacheService.createCacheEntry(cache);
    }

    @PutMapping("/{key}")
    public ResponseEntity<Cache> updateCacheEntry(@PathVariable String key, @RequestBody Cache cache) {
        try {
            Cache updatedCache = cacheService.updateCacheEntry(key, cache);
            return ResponseEntity.ok(updatedCache);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{key}")
    public ResponseEntity<Void> deleteCacheEntry(@PathVariable String key) {
        cacheService.deleteCacheEntry(key);
        return ResponseEntity.noContent().build();
    }
}
