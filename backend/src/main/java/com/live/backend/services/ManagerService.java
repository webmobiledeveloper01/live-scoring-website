package com.live.backend.services;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.live.backend.dto.ManagerDTO;
import com.live.backend.models.Users;
import com.live.backend.repos.UsersRepository;

@Service
public class ManagerService {

    @Autowired
    private UsersRepository usersRepository;

    public List<ManagerDTO> findAllManagers() {
        return usersRepository.findAllByRole(2) // Role 2 for managers
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public Optional<ManagerDTO> findManagerById(Long id) {
        return usersRepository.findById(id)
                .filter(user -> user.getRole() == 2) // Ensure it's a manager
                .map(this::convertToDTO);
    }

    public ManagerDTO createManager(ManagerDTO managerDTO) {
        Users user = new Users();
        user.setName(managerDTO.getName());
        user.setEmail(managerDTO.getEmail());
        user.setPassword(managerDTO.getPassword());
        user.setRole(managerDTO.getRole()); // Role is fixed at 2 for managers
        user.setStatus(managerDTO.getStatus());
        user.setCreated_at(LocalDateTime.now());
        user.setUpdated_at(LocalDateTime.now());
        user.setDeleted_at(null);
        user.setEmail_verified_at(null);
        Users savedUser = usersRepository.save(user);
        return convertToDTO(savedUser);
    }

    public ManagerDTO updateManager(long id, ManagerDTO managerDTO) {
        Users existingUser = usersRepository.findById(id).orElse(null);
        if (existingUser != null && existingUser.getRole() == 2) { // Ensure it's a manager
            existingUser.setName(managerDTO.getName());
            existingUser.setEmail(managerDTO.getEmail());
            existingUser.setPassword(managerDTO.getPassword());
            existingUser.setStatus(managerDTO.getStatus());
            existingUser.setUpdated_at(LocalDateTime.now());
            usersRepository.save(existingUser);
            return convertToDTO(existingUser);
        } else {
            throw new RuntimeException("Manager not found with ID: " + id);
        }
    }

    public void deleteManagerById(Long id) {
        Optional<Users> existingUser = usersRepository.findById(id);
        if (existingUser.isPresent() && existingUser.get().getRole() == 2) { // Ensure it's a manager
            Users user = existingUser.get();
            user.setDeleted_at(LocalDateTime.now());
            usersRepository.save(user);
        }
    }

    private ManagerDTO convertToDTO(Users user) {
        ManagerDTO managerDTO = new ManagerDTO();
        managerDTO.setId(user.getId());
        managerDTO.setName(user.getName());
        managerDTO.setEmail(user.getEmail());
        managerDTO.setPassword(user.getPassword());
        managerDTO.setRole(user.getRole());
        managerDTO.setStatus(user.getStatus());
        return managerDTO;
    }
}
