package com.exadel.DBController.Models;


import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

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

    public Passenger(){}

    public Passenger(int id_of_pass, int id_of_user){

        this.pass_id = id_of_pass;
        this.user_id = id_of_user;
    }
}