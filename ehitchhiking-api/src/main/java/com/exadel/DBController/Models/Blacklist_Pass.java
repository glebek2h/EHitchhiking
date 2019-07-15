package com.exadel.DBController.Models;


import lombok.*;

import javax.persistence.*;
import java.util.Set;


@Entity
@Table(name = "blacklist_pass", schema = "public")
public class Blacklist_Pass {

    @Id
    @Getter
    @Setter
    private int pass_id;


    @Getter
    @Setter
    private int driver_id;


//    @OneToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name = "pass_id")
//    private Passenger pass;
//
//
//
//    @OneToMany
//    @JoinColumn(name = "driver_id")
//    private Set<Driver> driverSet;


    public Blacklist_Pass(){}

    public Blacklist_Pass(int id_of_driver, int id_of_pass){
        this.pass_id = id_of_pass;
        this.driver_id = id_of_driver;
    }

}