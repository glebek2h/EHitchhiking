package com.exadel.ehitchhiking.requests;
import lombok.Data;
import org.springframework.data.geo.Point;

import java.sql.Timestamp;

@Data
public class RequestTripDriver {

    private String startingPoint;

    private String endingPoint;

    private Timestamp startingTime;

    private Timestamp endingTime;

    private Integer idOfCar;

    private Integer DriverId;

    private Integer seats;

    private Integer id;

    private Point coordStart;

    private Point coordEnd;

    private float distance;

}




