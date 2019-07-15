package com.exadel.DBController.Models;

import lombok.*;

import javax.persistence.*;

@Entity
@ToString
@Table (name = "employee", schema = "public")
@NoArgsConstructor
@EqualsAndHashCode
public class Employee {

    // declaring the attributes of the employee class (according to the database table )

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Setter(AccessLevel.PRIVATE)
    @Getter
    private  int id;

    @Getter
    @Setter
    private boolean isadmin;

    @Getter
    @Setter
    @Column(name = "username")
    private  String username;

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
    @Column(name="email")
    private String email;

    @Getter
    @Setter
    @Column(name = "pass_word")
    private String password;

    @Setter
    @Getter
    @Column(name = "rate_pass")
    private float rate_Pass;

    @Setter
    @Getter
    @Column(name = "rate_driver")
    private float rate_driver;

    @Setter
    @Getter
    @Column(name = "phone_number")
    private String phoneNum;

    // init method to create a new employee
    public Employee(boolean adm, String userName, String fname, String lname, String em,  String pass, float rt_dr, float rt_pass, String cell) {
        this.isadmin = adm;
        this.username = userName;
        this.firstName = fname;
        this.lastName = lname;
        this.email = em;
        this.password = pass;
        this.rate_driver = rt_dr;
        this.rate_Pass = rt_pass;
        this.phoneNum = cell;
    }

}

