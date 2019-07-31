package com.exadel.ehitchhiking.models;


import lombok.*;
import org.springframework.data.geo.Point;

import java.sql.*;

import javax.persistence.*;

@Entity
@Table(name = "\"TRIP_DRIVER\"", schema = "public")
@ToString
@EqualsAndHashCode
@NoArgsConstructor
public class TripDriver {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Setter(AccessLevel.PRIVATE)
    @Getter
    @Column(name = "\"ID\"")
    private Integer id;

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
    @ManyToOne (fetch = FetchType.EAGER)
    @JoinColumn(name = "\"CAR_ID\"")
    private Car car;

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

    @Getter
    @Setter
    @Column(name = "\"AVAILABLE_SEATS\"")
    private int availableSeats;

    @Getter
    @Setter
    @Column (name = "\"COORD_START\"")
    private Point coordStart;

    @Getter
    @Setter
    @Column (name = "\"COORD_END\"")
    private Point coordEnd;

    @Getter
    @Setter
    @Column (name = "\"DISTANCE\"")
    private float distance;

    @Getter
    @Setter
    @Column(name = "\"IS_HISTORY\"")
    private boolean isHistory;

    @Getter
    @Setter
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"CHAT\"")
    private Chat chat;

    public TripDriver(String startPoint, String endPoint,
                      Timestamp startTime, Timestamp endTime, boolean isActive,
                      boolean isFinished, boolean isSaved, int seats, Car car, boolean isHistory,
                      Point coordStart, Point coordEnd, float distance){
        this.startPoint = startPoint;
        this.endPoint = endPoint;
        this.startTime = startTime;
        this.endTime = endTime;
        this.isActive = isActive;
        this.isFinished = isFinished;
        this.isSaved = isSaved;
        this.availableSeats = seats;
        this.car = car;
        this.isHistory = isHistory;
        this.coordStart = coordStart;
        this.coordEnd = coordEnd;
        this.distance = distance;
    }

}
