package com.exadel.DBController.Models;


import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;

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
    private boolean trip_pass_id;

    @Getter
    @Setter
    private  String point_start;

    @Getter
    @Setter
    private String point_end;

    @Getter
    @Setter
    private String time_start;

    @Getter
    @Setter
    private String time_end;

    @Getter
    @Setter
    private String car_id;

    @Setter
    @Getter

    private float isactive;

    @Setter
    @Getter
    private float isfinished;

    @Setter
    @Getter
    private int issaved;
}
