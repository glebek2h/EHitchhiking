package com.exadel.DBController.Models;


import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "driver", schema = "public")
public class Passenger{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.PRIVATE)
    @Getter
    private int pass_id;

    @Getter
    @Setter
    private int user_id;


    @OneToMany(mappedBy = "pass")
    private Set<Trip_Pass> setTripPass;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private Employee emp;


    @OneToOne(mappedBy = "pass")
    private Blacklist_Pass blackListPassenger;

    @ManyToOne
    private Blacklist_Driver blackListDriver;

    public Passenger(){}

    public Passenger(int id_of_pass, int id_of_user){

        this.pass_id = id_of_pass;
        this.user_id = id_of_user;
    }
}