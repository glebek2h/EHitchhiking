package com.exadel.ehitchhiking.requests;
import lombok.Data;
import org.springframework.data.geo.Point;

import java.sql.Timestamp;
import java.time.Instant;

@Data
public class RequestTripDriver {

    private Integer empId;

    private String startingPoint;

    private String endingPoint;

    private Instant startingTime;

    private Instant endingTime;

    private Integer idOfCar;

    private Integer driverId;

    private Integer seats;

    private Integer id;

    private Point coordStart;

    private Point coordEnd;

    private Float distance;

}




