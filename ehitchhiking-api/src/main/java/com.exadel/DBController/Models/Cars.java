package com.exadel.DBController.Models;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "cars", schema = "public")
public class Cars {

    @Id
    private int car_id;

    private String car_color;

    private String veh_number;

    private String model;

    private int driver_id;


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
