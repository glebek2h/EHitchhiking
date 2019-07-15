package com.exadel.DBController.Models;


import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;

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


    public Driver(){}

    public Driver(int id_of_driver, int id_of_user){

        this.driver_id = id_of_driver;
        this.user_id = id_of_user;
    }
}
