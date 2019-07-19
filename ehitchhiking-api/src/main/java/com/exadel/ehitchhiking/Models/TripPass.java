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
@NoArgsConstructor
public class TripPass {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Setter(AccessLevel.PRIVATE)
    @Getter
    @Column(name = "trip_pass_id")
    private  Integer id;


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
    @Column(name = "pass_id")
    private Passenger passenger;

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

    @Setter
    @Getter
    @Column(name = "booked_seats")
    private int bookedSeats;

    @Getter
    @Setter
    @ManyToOne
    @Column(name = "trip_id")
    private TripDriver tripDriver;

    public TripPass(String startPoint, String endPoint,
                    Timestamp startTime, Timestamp endTime, boolean isActive,
                    boolean isFinished, boolean isSaved, int seats,
                    Passenger passenger, TripDriver tripDriver){
        this.startPoint = startPoint;
        this.endPoint = endPoint;
        this.startTime = startTime;
        this.endTime = endTime;
        this.isActive = isActive;
        this.isFinished = isFinished;
        this.isSaved = isSaved;
        this.bookedSeats = seats;
        this.passenger = passenger;
        this.tripDriver = tripDriver;
    }

}
