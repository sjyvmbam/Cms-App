package com.example.cmsbackend.repository;

import com.example.cmsbackend.model.Role;
import com.example.cmsbackend.model.User;
import com.sun.xml.bind.v2.model.core.ID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.Set;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {

    public User findByEmail(String email);

    public User findByUsername(String username);

    //public User findById(ID id);

}
