package com.exadel.ehitchhiking.Models;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@ToString
@Table(name = "employee", schema = "public")
@NoArgsConstructor
@EqualsAndHashCode
public class Employee {

    // declaring the attributes of the employee class (according to the database table )

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Setter(AccessLevel.PRIVATE)
    @Getter
    private int id;

    @Getter
    @Setter
    @Column(name = "isadmin")
    private boolean isAdmin;

    @Getter
    @Setter
    @Column(name = "username")
    private String userName;

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

    // init method to create a new employee

    public Employee(boolean isAdmin, String userName, String firstName, String lastName, String email, String password, String phoneNumber) {
        this.isAdmin = isAdmin;
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
    }
}

