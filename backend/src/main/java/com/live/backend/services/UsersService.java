package com.live.backend.services;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.live.backend.dto.UserDTO;
import com.live.backend.models.Users;
import com.live.backend.repos.UsersRepository;

@Service
public class UsersService {

    @Autowired
    private UsersRepository usersRepository;

    public List<UserDTO> findAll() {
        return usersRepository.findAll()
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public Optional<UserDTO> findById(Long id) {
        return usersRepository.findById(id).map(this::convertToDTO);
    }

    public UserDTO findByEmail(String email) {
        Users user = usersRepository.findByEmail(email);
        return user != null ? convertToDTO(user) : null;
    }

    public void deleteById(Long id) {
        Optional<Users> existingUser = usersRepository.findById(id);
        if (existingUser.isPresent()) {
            Users user = existingUser.get();
            user.setDeleted_at(LocalDateTime.now());
            usersRepository.save(user);
        }
    }

    public UserDTO updateUser(long id, UserDTO userDTO) {
        Users existingUser = usersRepository.findById(id).orElse(null);
        if (existingUser != null) {
            // Check if the email is being updated to a value that already exists
            if (!userDTO.getEmail().equals(existingUser.getEmail())) {
                Users userWithEmail = usersRepository.findByEmail(userDTO.getEmail());
                if (userWithEmail != null) {
                    throw new RuntimeException("Email already exists: " + userDTO.getEmail());
                }
            }

            existingUser.setName(userDTO.getName());
            existingUser.setEmail(userDTO.getEmail());
            existingUser.setPassword(userDTO.getPassword());
            existingUser.setRole(userDTO.getRole());
            existingUser.setStatus(userDTO.getStatus());
            existingUser.setRemember_token(userDTO.getRemember_token());
            existingUser.setUpdated_at(LocalDateTime.now());
            usersRepository.save(existingUser);
            return convertToDTO(existingUser);
        } else {
            throw new RuntimeException("User not found with ID: " + id);
        }
    }

    public UserDTO createUser(UserDTO userDTO) {
        Users user = new Users();
        user.setName(userDTO.getName());
        user.setEmail(userDTO.getEmail());
        user.setPassword(userDTO.getPassword());
        user.setRole(userDTO.getRole());
        user.setStatus(userDTO.getStatus());
        user.setRemember_token(userDTO.getRemember_token());
        user.setCreated_at(LocalDateTime.now());
        user.setUpdated_at(LocalDateTime.now());
        user.setDeleted_at(null);
        user.setEmail_verified_at(null);
        Users savedUser = usersRepository.save(user);
        return convertToDTO(savedUser);
    }

    private UserDTO convertToDTO(Users user) {
        UserDTO userDTO = new UserDTO();
        userDTO.setId(user.getId());
        userDTO.setName(user.getName());
        userDTO.setEmail(user.getEmail());
        userDTO.setPassword(user.getPassword());
        userDTO.setRole(user.getRole());
        userDTO.setStatus(user.getStatus());
        userDTO.setRemember_token(user.getRemember_token());
        return userDTO;
    }
}
