package com.exadel.ehitchhiking.requests;


import lombok.Data;
import org.springframework.data.geo.Point;

@Data
public class RequestTripPassenger {

    private Integer passId;

    private String startingPoint;

    private String endingPoint;

    private String startingTime;

    private String endingTime;

    private Integer idTripDriver;

    private Integer seats;

    private Integer id;

    private Point coordStart;

    private Point coordEnd;

    private float distance;

}
