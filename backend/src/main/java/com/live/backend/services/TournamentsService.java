package com.live.backend.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;

import com.live.backend.dto.TournamentDTO;
import com.live.backend.models.Tournaments;
import com.live.backend.models.TournamentSponsers;
import com.live.backend.repos.TournamentsRepository;
import com.live.backend.repos.TournamentSponsersRepository;

@Service
public class TournamentsService {

    @Autowired
    private TournamentsRepository tournamentsRepository;

    @Autowired
    private TournamentSponsersRepository tournamentSponsersRepository;

    public List<TournamentDTO> findAll() {
        return tournamentsRepository.findAll()
                                   .stream()
                                   .map(this::convertToDTO)
                                   .collect(Collectors.toList());
    }

    public Optional<TournamentDTO> findById(Long id) {
        return tournamentsRepository.findById(id).map(this::convertToDTO);
    }

    public TournamentDTO createTournament(TournamentDTO tournamentDTO) {
        Tournaments tournament = convertToEntity(tournamentDTO);
        Tournaments savedTournament = tournamentsRepository.save(tournament);
        return convertToDTO(savedTournament);
    }

    public TournamentDTO updateTournament(Long id, TournamentDTO tournamentDTO) {
        Tournaments existingTournament = tournamentsRepository.findById(id).orElse(null);
        if (existingTournament != null) {
            existingTournament.setName(tournamentDTO.getName());
            existingTournament.setDescription(tournamentDTO.getDescription());
            existingTournament.setLogo(tournamentDTO.getLogo());
            existingTournament.setStart_date(tournamentDTO.getStart_date());
            existingTournament.setEnd_date(tournamentDTO.getEnd_date());

            // Fetch and set the sponsor if it exists
            if (tournamentDTO.getSponsor_id() != null) {
                Optional<TournamentSponsers> sponsor = tournamentSponsersRepository.findById(tournamentDTO.getSponsor_id());
                if (sponsor.isPresent()) {
                    existingTournament.setSponsor(sponsor.get());
                } else {
                    throw new RuntimeException("Sponsor not found with ID: " + tournamentDTO.getSponsor_id());
                }
            }

            existingTournament.setStatus(tournamentDTO.getStatus());
            existingTournament.setUpdated_at(LocalDateTime.now());
            tournamentsRepository.save(existingTournament);
            return convertToDTO(existingTournament);
        } else {
            throw new RuntimeException("Tournament not found with ID: " + id);
        }
    }

    public void deleteById(Long id) {
        Optional<Tournaments> existingTournament = tournamentsRepository.findById(id);
        if (existingTournament.isPresent()) {
            Tournaments tournament = existingTournament.get();
            tournament.setDeleted_at(LocalDateTime.now());
            tournamentsRepository.save(tournament);
        }
    }

    private TournamentDTO convertToDTO(Tournaments tournament) {
        TournamentDTO tournamentDTO = new TournamentDTO();
        tournamentDTO.setId(tournament.getId());
        tournamentDTO.setName(tournament.getName());
        tournamentDTO.setDescription(tournament.getDescription());
        tournamentDTO.setLogo(tournament.getLogo());
        tournamentDTO.setStart_date(tournament.getStart_date());
        tournamentDTO.setEnd_date(tournament.getEnd_date());
        tournamentDTO.setSponsor_id(tournament.getSponsor() != null ? tournament.getSponsor().getId() : null);
        tournamentDTO.setStatus(tournament.getStatus());
        return tournamentDTO;
    }

    private Tournaments convertToEntity(TournamentDTO tournamentDTO) {
        Tournaments tournament = new Tournaments();
        tournament.setName(tournamentDTO.getName());
        tournament.setDescription(tournamentDTO.getDescription());
        tournament.setLogo(tournamentDTO.getLogo());
        tournament.setStart_date(tournamentDTO.getStart_date());
        tournament.setEnd_date(tournamentDTO.getEnd_date());

        if (tournamentDTO.getSponsor_id() != null) {
            Optional<TournamentSponsers> sponsor = tournamentSponsersRepository.findById(tournamentDTO.getSponsor_id());
            if (sponsor.isPresent()) {
                tournament.setSponsor(sponsor.get());
            }
        }

        tournament.setStatus(tournamentDTO.getStatus());
        tournament.setCreated_at(LocalDateTime.now());
        tournament.setUpdated_at(LocalDateTime.now());
        return tournament;
    }
}
