package com.exadel.ehitchhiking.Models;


import lombok.*;
import org.springframework.stereotype.Component;

import java.sql.*;
import java.util.Set;

import javax.persistence.*;

@Entity
@Table(name = "trip_driver")
@ToString
@EqualsAndHashCode
public class TripDriver {



    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Setter(AccessLevel.PRIVATE)
    @Getter
    private int trip_driver_id;

//    @Getter
//    @Setter
//    @OneToMany
//    @JoinColumn(name = "trip_pass_id")
//    private Set<TripPass> set_trip_pass_id;

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

//    @Getter
//    @Setter
//    @ManyToOne
//    @JoinColumn(name = "car_id")
//    private Cars car;

    @Setter
    @Getter

    private boolean isactive;

    @Setter
    @Getter
    private boolean isfinished;

    @Setter
    @Getter
    private boolean issaved;

    @Getter
    @Setter
    private int available_seats;


    // empty constructor
    public TripDriver(){}


    // constructor
    public TripDriver(String startingPoint, String endingPoint,
                      Timestamp startingTime, Timestamp endingTime, boolean is_Active,
                      boolean is_Finished, boolean is_Saved, int seats){


        this.point_start = startingPoint;
        this.point_end = endingPoint;
        this.time_start = startingTime;
        this.time_end = endingTime;
        this.issaved = is_Saved;
        this.isactive = is_Active;
        this.isfinished = is_Finished;
        this.available_seats = seats;
    }
}
