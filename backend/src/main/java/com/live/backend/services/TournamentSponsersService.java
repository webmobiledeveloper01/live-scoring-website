package com.live.backend.services;

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
        return tournamentSponsersRepository.save(tournamentSponser);
    }

    public void deleteById(Long id) {
        tournamentSponsersRepository.deleteById(id);
    }
}
