package com.example.cmsbackend.service;

import com.example.cmsbackend.model.Role;
import com.example.cmsbackend.model.User;
import com.example.cmsbackend.repository.RoleRepository;
import com.example.cmsbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.Set;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;

    public List<User> getUser(){
        return userRepository.findAll();
    }

    public User get(Long id){

        return userRepository.findById(id).get();
    }
    public List <Role> getRole(){
            return  roleRepository.findAll();

        }


    public User login(User userdata){
        User user =userRepository.findByUsername(userdata.getUsername());
        //BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        //if(encoder.matches(userdata.getPassword(),user.getPassword()))
        if(user.getPassword().equals(userdata.getPassword()))

            return user;
        return null;
    }

    public void save(User user){
        //BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        //String encodedPassword = encoder.encode(user.getPassword());
        //user.setPassword((encodedPassword));

        userRepository.save(user);


    }

    public String registration(User user){
        //BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        //String encodedPassword = encoder.encode(user.getPassword());
        user.setPassword((user.getPassword()));
        Role roleUser=roleRepository.findByName("User");
        user.addRole(roleUser);
        userRepository.save(user);
        return "register_success";
    }


    @Transactional
    public User updateParticipant(Long participantId,User updateUser) {
        if (userRepository.findById(participantId).isPresent()){
            User user = userRepository.findById(participantId).get();
            //BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
           // String encodedPassword = encoder.encode(updateUser.getPassword());
            user.setUsername(updateUser.getUsername());
            user.setRole(updateUser.getRole());
            user.setEmail(updateUser.getEmail());
            user.setLastName(updateUser.getLastName());
            user.setFirstName(updateUser.getFirstName());
            user.setPassword(updateUser.getPassword());
            user.setId(participantId);
            User updated = userRepository.save(user);
            return updated;
        }
        else{
            return null;
        }


    }

}
