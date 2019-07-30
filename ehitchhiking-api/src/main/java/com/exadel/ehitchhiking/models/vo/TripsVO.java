package com.exadel.ehitchhiking.models.vo;

/*

import com.exadel.ehitchhiking.models.TripDriver;
import com.exadel.ehitchhiking.models.TripPass;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.Instant;

@Data
public class TripsVO {


    private int employeeId;

    private String startPoint;

    private String endPoint;

    private Instant startTime;

    private Instant endTime;

    private boolean isActive;

    private boolean isFinished;

    private boolean isSaved;

    private int bookedSeats;

    private TripDriverVO tripDriver;

    private DriverVO driver;

    public static TripsVO fromEntity(TripPass tripPass) {
        return new TripsVO(
                tripPass.getPassenger().getEmployee().getId();
                tripPass.getStartPoint(),
                tripPass.getEndPoint(),
                tripPass.getStartTime().toInstant(),
                tripPass.getEndTime().toInstant(),
                tripPass.isActive(),
                tripPass.isFinished(),
                tripPass.isSaved(),
                tripPass.getBookedSeats(),
                TripDriverVO.fromEntity(tripPass.getTripDriver()),
                DriverVO.fromEntity(tripPass.getTripDriver().getCar().getDriver())
        );
    }
    }
*/

/*
    public static TripsVO fromEntity(TripDriver tripDriver) {
        return new TripsVO(
                tripDriver.getCar().getDriver().getEmployee().getId(),
                tripDriver.getStartPoint(),
                tripDriver.getEndPoint(),
                tripDriver.getStartTime().toInstant(),
                tripDriver.getEndTime().toInstant(),
                tripDriver.isActive(),
                tripDriver.isFinished(),
                tripDriver.isSaved(),
                tripDriver.getAvailableSeats(),
                null,
                null

        );
    }*/

/*
    public static void setTripDirver(TripDriver tripDriver){
        return new TripsVO(
        employeeId = tripDriver.getCar().getDriver().getEmployee().getId()
        );
    }*/




