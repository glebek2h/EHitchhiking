package com.exadel.ehitchhiking.Models;



import lombok.*;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;

@Entity
@Table(name = "trip_pass")
@ToString
@EqualsAndHashCode
public class TripPass {



    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
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
    @ManyToOne
    @JoinColumn(name ="pass_id", referencedColumnName = "pass_id")
    private Passenger pass;

    @Setter
    @Getter

    private boolean isactive;

    @Setter
    @Getter
    private boolean isfinished;

    @Setter
    @Getter
    private boolean issaved;

    @Setter
    @Getter
    private int booked_seats;



    @Getter
    @Setter
    @ManyToOne
    //@JoinColumn(name = "trip_id", referencedColumnName = "trip_driver_id")
    private TripDriver tripDriver;


    // empty constructor
    public TripPass(){}


    // constructor
    public TripPass(String startingPoint, String endingPoint,
                    Timestamp startingTime, Timestamp endingTime, boolean is_Active,
                    boolean is_Finished, boolean is_Saved, int seats){


        this.point_start = startingPoint;
        this.point_end = endingPoint;
        this.time_start = startingTime;
        this.time_end = endingTime;
        this.issaved = is_Saved;
        this.isactive = is_Active;
        this.isfinished = is_Finished;
        this.booked_seats = seats;
    }

}
