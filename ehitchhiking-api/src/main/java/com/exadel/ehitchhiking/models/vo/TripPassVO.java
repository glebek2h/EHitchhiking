package com.exadel.ehitchhiking.models.vo;


import com.exadel.ehitchhiking.models.TripPass;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.Instant;

@Data
@AllArgsConstructor
public class TripPassVO {

    private Integer id;

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

    public static TripPassVO fromEntity(TripPass tripPass) {
        return new TripPassVO(
                tripPass.getId(),
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
