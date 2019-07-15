package com.exadel.DBController.Models;


import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@NoArgsConstructor
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

    public Blacklist_Pass(){}

    public Blacklist_Pass(int id_of_driver, int id_of_pass){
        this.pass_id = id_of_pass;
        this.driver_id = id_of_driver;
    }

}