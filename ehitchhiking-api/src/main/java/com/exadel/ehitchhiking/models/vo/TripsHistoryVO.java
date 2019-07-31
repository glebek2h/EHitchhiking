package com.exadel.ehitchhiking.models.vo;


import com.exadel.ehitchhiking.models.TripDriver;
import com.exadel.ehitchhiking.models.TripPass;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.Instant;

@Data
@AllArgsConstructor
public class TripsHistoryVO {


    @JsonIgnore
    private int employeeId;

    private int idTrip;

    private String startPoint;

    private String endPoint;

    private boolean isFinished;

    private boolean isSaved;

    private String role;

   // private float rate;


    public static TripsHistoryVO fromEntity(TripPass tripPass) {
        return new TripsHistoryVO(
                tripPass.getPassenger().getEmployee().getId(),
                tripPass.getId(),
                tripPass.getStartPoint(),
                tripPass.getEndPoint(),
                tripPass.isFinished(),
                tripPass.isSaved(),
                "1"// Passenger role is 1
                //tripPass.getRate;

        );
    }


    public static TripsHistoryVO fromEntity(TripDriver tripDriver) {
        return new TripsHistoryVO(
                tripDriver.getCar().getDriver().getEmployee().getId(),
                tripDriver.getId(),
                tripDriver.getStartPoint(),
                tripDriver.getEndPoint(),
                tripDriver.isFinished(),
                tripDriver.isSaved(),
                "2"  // Driver's role is 2
                //tripDriver.getRate;
        );

    }


}




