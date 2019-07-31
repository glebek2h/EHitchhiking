package com.exadel.ehitchhiking.models.vo;

import com.exadel.ehitchhiking.models.TripDriver;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.geo.Point;
import org.springframework.stereotype.Service;

import javax.persistence.Id;
import java.time.Instant;
import java.util.Date;

@Data
@AllArgsConstructor
public class TripDriverVO {

    private Integer id;

    private String startingPoint;

    private String endingPoint;

    private Instant startingTime;

    private Instant endingTime;


    private CarVO car;

    @JsonIgnore
    private Integer idOfCar;

    private DriverVO driver;

    @JsonIgnore
    private boolean isActive;

    @JsonIgnore
    private boolean isFinished;

    @JsonIgnore
    private boolean isSaved;

    private int seats;

    private Point coordStart;

    private Point coordEnd;

    private float distance;

    private boolean isHistory;

    public static TripDriverVO fromEntity(TripDriver tripDriver) {
        return new TripDriverVO(
                tripDriver.getId(),
                tripDriver.getStartPoint(),
                tripDriver.getEndPoint(),
                tripDriver.getStartTime().toInstant(),
                tripDriver.getEndTime().toInstant(),
                CarVO.fromEntity(tripDriver.getCar()),
                tripDriver.getCar().getId(),
                DriverVO.fromEntity(tripDriver.getCar().getDriver()),
                tripDriver.isActive(),
                tripDriver.isFinished(),
                tripDriver.isSaved(),
                tripDriver.getAvailableSeats(),
                tripDriver.getCoordStart(),
                tripDriver.getCoordEnd(),
                tripDriver.getDistance(),
                tripDriver.isHistory()
        );
    }
}
