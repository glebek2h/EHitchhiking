package com.exadel.ehitchhiking.requests;


import lombok.Data;

@Data
public class RequestTripPassenger {

    private String passId;

    private String startingPoint;

    private String endingPoint;

    private String startingTime;

    private String endingTime;

    private String idTripDriver;

    private String seats;

    private String id;

}
