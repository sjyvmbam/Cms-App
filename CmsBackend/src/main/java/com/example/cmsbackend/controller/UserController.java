package com.example.cmsbackend.controller;

//import com.example.cmsbackend.config.WebSecurityConfiguration;
import com.example.cmsbackend.model.Role;
import com.example.cmsbackend.model.User;
import com.example.cmsbackend.repository.UserRepository;
import com.example.cmsbackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class UserController {
    @Autowired
    private UserService userService;

    //private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository userRepository;




    @GetMapping("/home")
    public String home(){
        return "this is Home Page";
    }


    @GetMapping("/admin")
    public String admin(){
        return "this is Admin Page";
    }


    @GetMapping("/listUser")
    public List<User> getUsers(){

        return userService.getUser();
    }

    @GetMapping("/listRole")
    public List <Role>getRoles(){
        return userService.getRole();
    }

    @PutMapping("/users/edit/{id}")
    public String editUser(@PathVariable("id") Long id){
     User user = userService.get(id);
     List<Role> roles=userService.getRole();
     return "successfull";
    }

    @PostMapping("/users/save")
    public String saveUser(User user){
       userService.save(user);
       return "save was successfull";
    }

  /*
   @GetMapping("/login")
    public boolean login(@RequestParam("username")String username,@RequestParam("password")String password) {
        return username.equals("sjyv") && password.equals("bouder"); // I would like to authenticate with auth.inMemoryAuthentication()
    }

      @GetMapping("/login")
    public ResponseEntity<?> login(@RequestParam("username")String username,@RequestParam("password")String password) {
        Authentication authentication= authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username,password));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        UserDetails userDetails=(UserDetails) authentication.getPrincipal();

     return  ResponseEntity.ok(authentication);
    }
   */

    @GetMapping("/login")
    public User loginUser(@RequestParam("username")String username,@RequestParam("password")String password){
        User userdata= new User();
        userdata.setUsername(username);
        userdata.setPassword(password);
        return userService.login(userdata);

    }

    @PostMapping("/process_register")
    public String processRegistration(User user){
       return userService.registration(user);
    }

    @PutMapping(path="/update/{participantId}")
    public User updateParticipant(@PathVariable("participantId") Long participantId,@RequestBody User user){
        System.out.println(user);
       return userService.updateParticipant(participantId,user);
    }




}
