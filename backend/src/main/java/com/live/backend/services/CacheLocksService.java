package com.live.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.live.backend.models.CacheLocks;
import com.live.backend.repos.CacheLocksRepository;

@Service
public class CacheLocksService {

    @Autowired
    private CacheLocksRepository cacheLocksRepository;

    public List<CacheLocks> getAllCacheLocks() {
        return cacheLocksRepository.findAll();
    }

    public Optional<CacheLocks> getCacheLockByKey(String key) {
        return cacheLocksRepository.findById(key);
    }

    public CacheLocks createCacheLock(CacheLocks cacheLocks) {
        return cacheLocksRepository.save(cacheLocks);
    }

    public CacheLocks updateCacheLock(String key, CacheLocks cacheLocks) {
        if (cacheLocksRepository.existsById(key)) {
            cacheLocks.setCache_lock_key(key);
            return cacheLocksRepository.save(cacheLocks);
        } else {
            throw new RuntimeException("CacheLocks not found with key " + key);
        }
    }

    public void deleteCacheLock(String key) {
        cacheLocksRepository.deleteById(key);
    }
}
