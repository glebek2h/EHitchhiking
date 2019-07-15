package com.exadel.DBController.Models;


import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import java.io.*;
import java.util.Set;

import javax.persistence.*;

@Entity
@Table(name = "driver", schema = "public")
public class Driver {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.PRIVATE)
    @Getter
    private int driver_id;

    @Getter
    @Setter
    private int user_id;


    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private Employee emp;


    @OneToMany(mappedBy = "drive")
    private Set<Cars> car_set;


    @ManyToOne
    private Blacklist_Pass BlackListPassenger;


    @OneToOne(cascade = CascadeType.ALL)
    private Blacklist_Driver BlackListDriver;

    public Driver(){}

    public Driver(int id_of_driver, int id_of_user){

        this.driver_id = id_of_driver;
        this.user_id = id_of_user;
    }
}
