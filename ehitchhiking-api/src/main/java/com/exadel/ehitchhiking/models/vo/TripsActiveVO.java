package com.exadel.ehitchhiking.models.vo;


import com.exadel.ehitchhiking.models.TripDriver;
import com.exadel.ehitchhiking.models.TripPass;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.geo.Point;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
public class TripsActiveVO {


    @JsonIgnore
    private int employeeId;

    private int idTrip;

    private String startPoint;

    private String endPoint;

    private int role;

    private Instant startTime;

    private Instant endTime;

    private int seats;

    private List<PassInfoVO> passList;

    private DriverVO driver;

    private CarVO car;


    public static TripsActiveVO fromEntity(TripPass tripPass, List<PassInfoVO> pass) {
        return new TripsActiveVO(
                tripPass.getPassenger().getEmployee().getId(),
                tripPass.getId(),
                tripPass.getStartPoint(),
                tripPass.getEndPoint(),
                1, // Passenger is 1
                tripPass.getTripDriver().getStartTime().toInstant(),
                tripPass.getTripDriver().getEndTime().toInstant(),
                tripPass.getBookedSeats(),
                pass,
                DriverVO.fromEntity(tripPass.getTripDriver().getCar().getDriver()),
                CarVO.fromEntity(tripPass.getTripDriver().getCar())
        );

    }


    public static TripsActiveVO fromEntity(TripDriver tripDriver, List<PassInfoVO> pass) {
        return new TripsActiveVO(
                tripDriver.getCar().getDriver().getEmployee().getId(),
                tripDriver.getId(),
                tripDriver.getStartPoint(),
                tripDriver.getEndPoint(),
                2, // Driver is 2
                tripDriver.getStartTime().toInstant(),
                tripDriver.getEndTime().toInstant(),
                GetSeats(pass),
                pass,
                DriverVO.fromEntity(tripDriver.getCar().getDriver()),
                CarVO.fromEntity(tripDriver.getCar())
        );

    }


    public static int GetSeats(List<PassInfoVO> pass){
        int seats = 0;
        for (PassInfoVO passInfoVO: pass){
            seats += passInfoVO.getSeats();
        }
        return seats;
    }
}
