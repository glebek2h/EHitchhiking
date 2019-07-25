package com.exadel.ehitchhiking.models.vo;

import com.exadel.ehitchhiking.models.Car;
import com.exadel.ehitchhiking.models.Driver;
import com.exadel.ehitchhiking.models.TripDriver;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.Instant;
import java.util.Date;

@Data
@AllArgsConstructor
public class TripDriverVO {


    private Integer id;

    private String startPoint;

    private String endPoint;

    private Instant startTime;

    private Instant endTime;

    private CarVO car;

    private DriverVO driver;

    private boolean isActive;

    private boolean isFinished;

    private boolean isSaved;

    private int availableSeats;

    public static TripDriverVO fromEntity(TripDriver tripDriver) {
        return new TripDriverVO(
                tripDriver.getId(),
                tripDriver.getStartPoint(),
                tripDriver.getEndPoint(),
                tripDriver.getStartTime().toInstant(),
                tripDriver.getEndTime().toInstant(),
                CarVO.fromEntity(tripDriver.getCar()),
                DriverVO.fromEntity(tripDriver.getCar().getDriver()),
                tripDriver.isActive(),
                tripDriver.isFinished(),
                tripDriver.isSaved(),
                tripDriver.getAvailableSeats()
        );
    }
}
