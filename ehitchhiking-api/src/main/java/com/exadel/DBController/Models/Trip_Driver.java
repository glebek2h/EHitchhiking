package com.exadel.DBController.Models;


import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import java.sql.*;
import java.util.Set;

import javax.persistence.*;

@Entity
@Table(name = "trip_driver")
public class Trip_Driver {



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.PRIVATE)
    @Getter
    private  int trip_driver_id;

    @Getter
    @Setter
    private int trip_pass_id;

    @Getter
    @Setter
    private  String point_start;

    @Getter
    @Setter
    private String point_end;

    @Getter
    @Setter
    private Timestamp time_start;

    @Getter
    @Setter
    private Timestamp time_end;

    @Getter
    @Setter
    private int car_id;

    @Setter
    @Getter

    private boolean isactive;

    @Setter
    @Getter
    private boolean isfinished;

    @Setter
    @Getter
    private boolean issaved;


    @ManyToOne
    @JoinColumn(name = "car_id")
    private Cars car;



    @OneToMany
    @JoinColumn(name = "trip_pass_id")
    private Set<Trip_Pass> setTripPass;

    // empty constructor
    public Trip_Driver(){}


    // constructor
    public Trip_Driver(int id_pass_trip, String startingPoint, String endingPoint,
                       Timestamp startingTime, Timestamp endingTime, int id_of_car, boolean is_Active,
                       boolean is_Finished, boolean is_Saved){

        this.trip_pass_id = id_pass_trip;
        this.point_start = startingPoint;
        this.point_end = endingPoint;
        this.time_start = startingTime;
        this.time_end = endingTime;
        this.car_id = id_of_car;
        this.issaved = is_Saved;
        this.isactive = is_Active;
        this.isfinished = is_Finished;
    }
}
