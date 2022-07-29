package com.example.cmsbackend.RepositoryTest;

import com.example.cmsbackend.model.Role;
import com.example.cmsbackend.model.User;
import com.example.cmsbackend.repository.RoleRepository;
import com.example.cmsbackend.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.test.annotation.Rollback;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import static org.assertj.core.api.Assertions.assertThat;


@DataJpaTest
@AutoConfigureTestDatabase(replace= AutoConfigureTestDatabase.Replace.NONE)
@Rollback(false)
public class UserRepositoryTests {
    @Autowired
    private UserRepository userRepo;

    @Autowired
    private RoleRepository roleRepo;

    @Autowired
    private TestEntityManager entityManager;

    @Test
    public void testCreateUser(){
        User user= new User();
        user.setUsername("mty12");
        user.setEmail("tommy@gmail.com");
        user.setPassword("tom1234");
        user.setFirstName("Tommy");
        user.setLastName("Howard");
        User savedUser = userRepo.save(user);
        User exitUser = entityManager.find(User.class,savedUser.getId());
        assertThat(exitUser.getEmail()).isEqualTo(user.getEmail());
    }
    @Test
    public void testFindUserByEmail(){
         String email= "tommy@gmail.com";
         User user =userRepo.findByEmail(email);
        System.out.println(user);
         assertThat(user).isNotNull();
    }

    @Test
    public void testAddRoleToNewUser(){
        User user= new User();
        user.setUsername("sid12");
        user.setEmail("ravi123tommy@gmail.com");
        user.setPassword("ravi1234");
        user.setFirstName("Ravi");
        user.setLastName("Kumar");

        Role roleUser =roleRepo.findById(1L).get();
        user.addRole(roleUser);
        User saveUser= userRepo.save(user);
        assertThat(saveUser.getRole().size()).isEqualTo(1);
    }

    @Test
    public void testAddRolesToExistingUser(){
       User user = userRepo.findById(1L).get();
       Role roleUser =roleRepo.findById(1L).get();
       user.addRole(roleUser);
       Role roleAdmin = new Role(2L);
       user.addRole(roleAdmin);

       User savedUser=userRepo.save(user);
       assertThat(savedUser.getRole().size()).isEqualTo(2);
    }

    @Test
    public void testRegistration(){
        User user = new User();
        user.setUsername("sjyv");
        user.setEmail("bouder@outlook.com");
        user.setPassword("bouder");
        user.setFirstName("Arnold");
        user.setLastName("bouderia");
        //BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        //String encodedPassword = encoder.encode(user.getPassword());
        //user.setPassword(());
        User savedUser=userRepo.save(user);
    }

    @Test
    public String getRole(){
        User user = new User();
        Set<Role> role=user.getRole();
        for (Role roles:role){
            System.out.println("Hello" + roles.getName());
            return  roles.getName();
        }
        return user.getEmail();

    }


}

