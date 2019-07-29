package com.exadel.ehitchhiking.models;

import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

@Entity
@ToString
@Table(name = "\"EMPLOYEE\"", schema = "public")
@EqualsAndHashCode
@NoArgsConstructor
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Setter(AccessLevel.PRIVATE)
    @Getter
    @Column(name = "\"ID\"")
    private Integer id;

    @Getter
    @Setter
    @Column(name = "\"IS_ADMIN\"")
    private boolean isAdmin;


    //Email of the user is their username
    @Getter
    @Setter
    @Column(name = "\"EMAIL\"")
    private String email;


    @Getter
    @Setter
    @Column(name = "\"FIRST_NAME\"")
    private String firstName;

    @Getter
    @Setter
    @Column(name = "\"LAST_NAME\"")
    private String lastName;


    @Getter
    @Setter
    @Column(name = "\"PASS_WORD\"")
    private String password;

    @Setter
    @Getter
    @Column(name = "\"PHONE_NUMBER\"")
    private String phoneNumber;

    public Employee(boolean isAdmin, String firstName, String lastName, String email, String password, String phoneNumber) {
        this.isAdmin = isAdmin;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
    }

}

