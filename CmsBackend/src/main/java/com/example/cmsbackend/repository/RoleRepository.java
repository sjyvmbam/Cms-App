package com.example.cmsbackend.repository;

import com.example.cmsbackend.model.Role;
import com.example.cmsbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.Set;

@Repository
public interface RoleRepository extends JpaRepository<Role,Long> {

    @Query("SELECT r FROM Role r WHERE r.name= ?1")
    public Role findByName(String name);

}
