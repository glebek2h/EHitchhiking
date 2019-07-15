package com.exadel.DBController.Models;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "driver", schema = "public")
public class Driver {

    @Id
    private int driver_id;

    private int user_id;

    public Driver(){}

    public Driver(int id_of_driver, int id_of_user){

        this.driver_id = id_of_driver;
        this.user_id = id_of_user;
    }
}
