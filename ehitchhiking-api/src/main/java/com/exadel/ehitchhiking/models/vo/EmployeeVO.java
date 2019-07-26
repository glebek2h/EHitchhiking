package com.exadel.ehitchhiking.models.vo;


import com.exadel.ehitchhiking.models.Employee;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

@Data
@AllArgsConstructor
public class EmployeeVO implements UserDetails {

    private Integer id;

    private boolean isAdmin;

    private String firstName;

    private String lastName;

    private String email;

    private String phoneNumber;

    public static EmployeeVO fromEntity(Employee Employee) {
        return new EmployeeVO(
                Employee.getId(),
                Employee.isAdmin(),
                Employee.getFirstName(),
                Employee.getLastName(),
                Employee.getEmail(),
                Employee.getPhoneNumber()
        );
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        Set<GrantedAuthority> grantedAuthorities = new HashSet<>();
        grantedAuthorities.add(new SimpleGrantedAuthority("Admin"));
        grantedAuthorities.add(new SimpleGrantedAuthority("Employee"));

        return null;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public String getPassword() {
        return getPassword();
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
