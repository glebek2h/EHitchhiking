package com.exadel.ehitchhiking.Models;


import lombok.*;

import java.sql.*;
import java.util.Set;

import javax.persistence.*;

@Entity
@Table(name = "trip_driver")
@ToString
@EqualsAndHashCode
@NoArgsConstructor
public class TripDriver {



    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Setter(AccessLevel.PRIVATE)
    @Getter
    @Column(name = "trip_driver_id")
    private Integer id;

    @Getter
    @Setter
    @OneToMany(mappedBy = "id")
    private Set<TripPass> tripPassSet;

    @Getter
    @Setter
    @Column(name = "point_start")
    private String startPoint;

    @Getter
    @Setter
    @Column(name = "point_end")
    private String endPoint;

    @Getter
    @Setter
    @Column(name = "time_start")
    private Timestamp startTime;

    @Getter
    @Setter
    @Column(name = "time_end")
    private Timestamp endTime;

    @Getter
    @Setter
    @ManyToOne
    private Car car;

    @Setter
    @Getter
    @Column(name = "isactive")
    private boolean isActive;

    @Setter
    @Getter
    @Column(name = "isfinished")
    private boolean isFinished;

    @Setter
    @Getter
    @Column(name = "issaved")
    private boolean isSaved;

    @Getter
    @Setter
    @Column(name = "available_seats")
    private int availableSeats;

    public TripDriver(String startPoint, String endPoint,
                      Timestamp startTime, Timestamp endTime, boolean isActive,
                      boolean isFinished, boolean isSaved, int seats, Car car){
        this.startPoint = startPoint;
        this.endPoint = endPoint;
        this.startTime = startTime;
        this.endTime = endTime;
        this.isActive = isActive;
        this.isFinished = isFinished;
        this.isSaved = isSaved;
        this.availableSeats = seats;
        this.car = car;
    }
}
