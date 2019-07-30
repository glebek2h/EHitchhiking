package com.exadel.ehitchhiking.requests;


import lombok.Data;
import org.springframework.data.geo.Point;

import java.sql.Timestamp;

@Data
public class RequestTripPassenger {

    private Integer passId;

    private String startingPoint;

    private String endingPoint;

    private Timestamp startingTime;

    private Timestamp endingTime;

    private Integer idTripDriver;

    private Integer seats;

    private Integer id;

    private Point coordStart;

    private Point coordEnd;

    private float distance;

}
