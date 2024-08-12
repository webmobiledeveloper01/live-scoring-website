package com.live.backend.services;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.live.backend.models.TournamentSponsers;
import com.live.backend.repos.TournamentSponsersRepository;

@Service
public class TournamentSponsersService {

    @Autowired
    private TournamentSponsersRepository tournamentSponsersRepository;

    public List<TournamentSponsers> findAll() {
        return tournamentSponsersRepository.findAll();
    }

    public Optional<TournamentSponsers> findById(Long id) {
        return tournamentSponsersRepository.findById(id);
    }

    public TournamentSponsers save(TournamentSponsers tournamentSponser) {
        tournamentSponser.setCreated_at(LocalDateTime.now());
        tournamentSponser.setUpdated_at(LocalDateTime.now());
        tournamentSponser.setDeleted_at(null);
        return tournamentSponsersRepository.save(tournamentSponser);
    }

    public TournamentSponsers updateTournamentSponser(Long id, TournamentSponsers tournamentSponser) {
        Optional<TournamentSponsers> existingSponserOpt = tournamentSponsersRepository.findById(id);
        if (existingSponserOpt.isPresent()) {
            TournamentSponsers existingSponser = existingSponserOpt.get();
            existingSponser.setName(tournamentSponser.getName());
            existingSponser.setDescription(tournamentSponser.getDescription());
            existingSponser.setImage(tournamentSponser.getImage());
            existingSponser.setUrl(tournamentSponser.getUrl());
            existingSponser.setType(tournamentSponser.getType());
            existingSponser.setStatus(tournamentSponser.getStatus());
            existingSponser.setDeleted_at(tournamentSponser.getDeleted_at());
            existingSponser.setCreated_at(tournamentSponser.getCreated_at());
            existingSponser.setUpdated_at(LocalDateTime.now());

            return tournamentSponsersRepository.save(existingSponser);
        } else {
            throw new RuntimeException("TournamentSponser not found with ID: " + id);
        }
    }

    public void deleteById(Long id) {

        TournamentSponsers ts = tournamentSponsersRepository.findById(id).orElse(null);
        if (ts != null) {
            ts.setDeleted_at(LocalDateTime.now());
            tournamentSponsersRepository.save(ts);
        }

    }
}
