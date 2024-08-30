package com.live.backend.controllers;

import com.live.backend.dto.TeamDTO;
import com.live.backend.models.Teams;
import com.live.backend.models.Users;
import com.live.backend.repos.UsersRepository;
import com.live.backend.services.TeamsService;
import com.live.backend.services.UsersService;

import com.live.backend.services.UsersService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;
@RestController
@CrossOrigin("*")
@RequestMapping("/api/teams")
public class TeamsController {

    @Autowired
    private TeamsService teamsService;

    @Autowired
    private UsersRepository usersRepository;


    @GetMapping
    public ResponseEntity<List<TeamDTO>> getAllTeams() {
        List<Teams> teams = teamsService.findAll();
        List<TeamDTO> teamDTOs = teams.stream().map(this::convertToDTO).collect(Collectors.toList());
        return new ResponseEntity<>(teamDTOs, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TeamDTO> getTeamById(@PathVariable Long id) {
        Teams team = teamsService.findById(id)
                .orElseThrow(() -> new RuntimeException("Team not found"));
        return new ResponseEntity<>(convertToDTO(team), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<TeamDTO> createTeam(@RequestBody TeamDTO teamDTO) {
        Teams team = convertToEntity(teamDTO);
        Teams savedTeam = teamsService.save(team);
        return new ResponseEntity<>(convertToDTO(savedTeam), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TeamDTO> updateTeam(@PathVariable Long id, @RequestBody TeamDTO teamDTO) {
        Teams team = convertToEntity(teamDTO);
        team.setId(id);
        Teams updatedTeam = teamsService.update(team);
        return new ResponseEntity<>(convertToDTO(updatedTeam), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTeam(@PathVariable Long id) {
        teamsService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    private TeamDTO convertToDTO(Teams team) {
        TeamDTO dto = new TeamDTO();
        dto.setId(team.getId());
        dto.setName(team.getName());
        dto.setLogo(team.getLogo());
        dto.setDescription(team.getDescription());
        dto.setContact_details(team.getContact_details());  // Ensure consistency
        dto.setStatus(team.getStatus());
        dto.setManager_id(team.getManager().getId());
        return dto;
    }

    private Teams convertToEntity(TeamDTO dto) {
        Teams team = new Teams();
        team.setId(dto.getId());
        team.setName(dto.getName());
        team.setLogo(dto.getLogo());
        team.setDescription(dto.getDescription());
        team.setContact_details(dto.getContact_details());  // Ensure consistency
        team.setStatus(dto.getStatus());
        Users manager = usersRepository.findById(dto.getManager_id()).orElse(null);
        team.setManager(manager);
        
        return team;
    }
}
