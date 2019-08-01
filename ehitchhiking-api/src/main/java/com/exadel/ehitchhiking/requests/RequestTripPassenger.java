package com.exadel.ehitchhiking.requests;


import lombok.Data;
import com.exadel.ehitchhiking.requests.Point;
import java.time.Instant;

@Data
public class RequestTripPassenger {

    private Integer empId;

    private Integer passId;

    private String startingPoint;

    private String endingPoint;

    private Instant startingTime;

    private Instant endingTime;

    private Integer idTripDriver;

    private Integer seats;

    private Integer id;

    private Point coordStart;

    private Point coordEnd;

    private float distance;

}
