package com.exadel.ehitchhiking.requests;


import lombok.Data;
import org.springframework.data.geo.Point;

import java.sql.Timestamp;
import java.time.Instant;

@Data
public class RequestTripPassenger {


    private Integer empId;

    private String startingPoint;

    private String endingPoint;

    private Instant startingTime;

    private Instant endingTime;

    private Integer idOfCar;

    private Integer id;

    private Integer idTripDriver;

    private Integer seats;

    private Point coordStart;

    private Point coordEnd;

    private Float distance;;

}
