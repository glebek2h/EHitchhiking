package com.exadel.ehitchhiking.models;



import lombok.*;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "\"TRIP_PASSENGER\"")
@ToString
@EqualsAndHashCode
@NoArgsConstructor
public class TripPass {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Setter(AccessLevel.PRIVATE)
    @Getter
    @Column(name = "\"ID\"")
    private  Integer id;


    @Getter
    @Setter
    @Column(name = "\"POINT_START\"")
    private String startPoint;

    @Getter
    @Setter
    @Column(name = "\"POINT_END\"")
    private String endPoint;

    @Getter
    @Setter
    @Column(name = "\"TIME_START\"")
    private Timestamp startTime;

    @Getter
    @Setter
    @Column(name = "\"TIME_END\"")
    private Timestamp endTime;

    @Getter
    @Setter
    @ManyToOne
    private Passenger passenger;

    @Setter
    @Getter
    @Column(name = "\"IS_ACTIVE\"")
    private boolean isActive;

    @Setter
    @Getter
    @Column(name = "\"IS_FINISHED\"")
    private boolean isFinished;

    @Setter
    @Getter
    @Column(name = "\"IS_SAVED\"")
    private boolean isSaved;

    @Setter
    @Getter
    @Column(name = "\"BOOKED_SEATS\"")
    private int bookedSeats;

    @Getter
    @Setter
    @ManyToOne (fetch = FetchType.EAGER)
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
