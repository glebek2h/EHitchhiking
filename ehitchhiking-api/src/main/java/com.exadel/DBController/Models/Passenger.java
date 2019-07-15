package com.exadel.DBController.Models;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "driver", schema = "public")
public class Passenger{

    @Id
    private int pass_id;

    private int user_id;

    public Passenger(){}

    public Passenger(int id_of_pass, int id_of_user){

        this.pass_id = id_of_pass;
        this.user_id = id_of_user;
    }
}