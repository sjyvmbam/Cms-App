
/*
package com.example.cmsbackend.config;

import com.example.cmsbackend.model.Role;
import com.example.cmsbackend.model.User;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.*;

public class CustomerUserDetails implements UserDetails {
    private static final long serialVersionUID=1L;
    private User user;
    public CustomerUserDetails(User user){
        super();
        this.user= user;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        Set<Role> role=user.getRole();
        List<SimpleGrantedAuthority> authorities= new ArrayList<>();
        for (Role roles:role){
            authorities.add(new SimpleGrantedAuthority(roles.getName()));
        }
        System.out.println(authorities);
        return authorities;
    }

    @Override
    public String getPassword() {
        return user.getPassword();
    }

    @Override
    public String getUsername() {
        return user.getUsername();
    }


    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
*/
