package com.live.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.live.backend.models.PlayerTransfers;
import com.live.backend.repos.PlayerTransfersRepository;

@Service
public class PlayerTransfersService {

    @Autowired
    private PlayerTransfersRepository playerTransfersRepository;

    public List<PlayerTransfers> getAllPlayerTransfers() {
        return playerTransfersRepository.findAll();
    }

    public Optional<PlayerTransfers> getPlayerTransferById(Long id) {
        return playerTransfersRepository.findById(id);
    }

    public PlayerTransfers createPlayerTransfer(PlayerTransfers playerTransfers) {
        return playerTransfersRepository.save(playerTransfers);
    }

    public PlayerTransfers updatePlayerTransfer(Long id, PlayerTransfers playerTransfers) {
        if (playerTransfersRepository.existsById(id)) {
            playerTransfers.setId(id);
            return playerTransfersRepository.save(playerTransfers);
        } else {
            throw new RuntimeException("PlayerTransfers not found with id " + id);
        }
    }

    public void deletePlayerTransfer(Long id) {
        playerTransfersRepository.deleteById(id);
    }
}
