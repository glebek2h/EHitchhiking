package com.exadel.DBController.Models;




import lombok.*;

import javax.persistence.*;

@Entity
@Table (name = "employee", schema = "public")
public class Employee {

    // declaring the attributes of the employee class (according to the database table )

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.PRIVATE)
    @Getter
    private  int id;

    @Getter
    @Setter
    private boolean admin;

    @Getter
    @Setter
    //@Column(name = "username")
    private  String username;

    @Getter
    @Setter
    @Column(name = "The_First_Name")
    private String firstName;

    @Getter
    @Setter
    @Column(name = "the_Last_Name")
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
    private int phoneNum;


    @OneToOne(mappedBy = "emp")
    private Passenger pass;


    @OneToOne(mappedBy = "emp")
    private Driver drive;


    public  Employee (){}

    // init method to create a new employee
    public Employee(boolean adm, String userName, String fname, String lname, String em,  String pass, int rt_dr, int rt_pass, int cell) {
        this.admin = adm;
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

