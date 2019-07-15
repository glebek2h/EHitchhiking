package com.exadel.DBController.Models;



import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "trip_pass")
public class Trip_Pass {



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.PRIVATE)
    @Getter
    private  int trip_pass_id;


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
    private int pass_id;

    @Setter
    @Getter

    private boolean isactive;

    @Setter
    @Getter
    private boolean isfinished;

    @Setter
    @Getter
    private boolean issaved;




//    @ManyToOne
//    private Trip_Driver tripDriver;
//
//
//    @ManyToOne
//    @JoinColumn(name = "pass_id")
//    private Passenger pass;

    // empty constructor
    public Trip_Pass(){}


    // constructor
    public Trip_Pass(int id_pass_trip, String startingPoint, String endingPoint,
                       Timestamp startingTime, Timestamp endingTime, int id_of_pass, boolean is_Active,
                       boolean is_Finished, boolean is_Saved){

        this.trip_pass_id = id_pass_trip;
        this.point_start = startingPoint;
        this.point_end = endingPoint;
        this.time_start = startingTime;
        this.time_end = endingTime;
        this.pass_id = id_of_pass;
        this.issaved = is_Saved;
        this.isactive = is_Active;
        this.isfinished = is_Finished;
    }

}
