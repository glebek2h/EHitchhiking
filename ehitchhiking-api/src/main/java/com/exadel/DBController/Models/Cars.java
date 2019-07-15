package com.exadel.DBController.Models;


import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "cars", schema = "public")
public class Cars {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.PRIVATE)
    @Getter
    private int car_id;


    @Setter
    @Getter
    private String car_color;


    @Setter
    @Getter
    private String veh_number;


    @Setter
    @Getter
    private String model;


    @Setter
    @Getter
    private int driver_id;

//    @ManyToOne
//    @JoinColumn(name = "driver_id")
//    private Driver drive;


//    @OneToMany(mappedBy = "car")
//    private Set<Trip_Driver> setTripDriver;





    public Cars(){}

    public Cars(int id_of_car, String color, String number, String car_model,
                int id_of_driver){

        this.car_id = id_of_car;
        this.car_color = color;
        this.veh_number= number;
        this.model = car_model;
        this.driver_id = id_of_driver;
    }
}
