package com.exadel.ehitchhiking.Models;

import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;

@Entity
@ToString
@Table(name = "employee")
@EqualsAndHashCode
@NoArgsConstructor
public class Employee implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Setter(AccessLevel.PRIVATE)
    @Getter
    @Column(name = "id")
    private Integer id;

    @Getter
    @Setter
    @Column(name = "isadmin")
    private boolean isAdmin;

    @Getter
    @Setter
    @Column(name = "username")
    private String username;

    @Getter
    @Setter
    @Column(name = "the_first_name")
    private String firstName;

    @Getter
    @Setter
    @Column(name = "the_last_name")
    private String lastName;

    @Getter
    @Setter
    @Column(name = "email")
    private String email;

    @Getter
    @Setter
    @Column(name = "pass_word")
    private String password;

    @Setter
    @Getter
    @Column(name = "phone_number")
    private String phoneNumber;

    public Employee(boolean isAdmin, String username, String firstName, String lastName, String email, String password, String phoneNumber) {
        this.isAdmin = isAdmin;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
/*        Set<GrantedAuthority> grantedAuthorities = new HashSet<>();
        grantedAuthorities.add(new SimpleGrantedAuthority("Admin"));
        grantedAuthorities.add(new SimpleGrantedAuthority("Employee"));

        if (grantedAuthorities != null) {
            return grantedAuthorities.stream()
                    .map(GrantedAuthority::getAuthority)
                    .map(a -> authorityToPermissionMap.get(a))
                    .filter(Objects::nonNull)
                    .filter(a -> !a.isEmp())
                    .map(SimpleGrantedAuthority::new)
                    .collect(Collectors.toSet());
        } else {*/
        return null;
        //}
    }

/*        return getAuthorities(){
    }*/

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

