package com.exadel.DBController.Models;



import lombok.*;

import javax.persistence.*;
import java.util.Set;


@Entity
@Table(name = "blacklist_driver", schema = "public")
public class Blacklist_Driver {

    // map it as a foreign key, investigate if there is a need in @Id here
    @Id
    @Getter
    @Setter
    private int pass_id;

    @Getter
    @Setter
    private int driver_id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "driver_id")
    private Driver drive;

    @OneToMany(mappedBy = "blackListDriver")
    private Set<Passenger> passengerSet;

    public  Blacklist_Driver(){}


    public Blacklist_Driver(int id_of_pass, int id_of_driver){
        this.pass_id = id_of_pass;
        this.driver_id = id_of_driver;
    }

}
