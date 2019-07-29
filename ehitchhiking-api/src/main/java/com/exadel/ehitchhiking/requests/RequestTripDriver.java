package com.exadel.ehitchhiking.requests;
import lombok.Data;
import org.springframework.data.geo.Point;

@Data
public class RequestTripDriver {

    private String startingPoint;

    private String endingPoint;

    private String startingTime;

    private String endingTime;

    private Integer idOfCar;

    private Integer DriverId;

    private Integer seats;

    private Integer id;

    private Point coordStart;

    private Point coordEnd;

    private float distance;

}




