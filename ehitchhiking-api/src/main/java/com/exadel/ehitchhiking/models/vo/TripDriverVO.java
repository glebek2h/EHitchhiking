package com.exadel.ehitchhiking.models.vo;

import com.exadel.ehitchhiking.models.Car;
import com.exadel.ehitchhiking.models.Driver;
import com.exadel.ehitchhiking.models.TripDriver;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Service;

import javax.persistence.Id;
import java.time.Instant;
import java.util.Date;

@Data
@AllArgsConstructor
public class TripDriverVO {


    @Getter
    @Setter
    @Id
    private Integer id;

    @Getter
    @Setter
    private String startingPoint;

    @Getter
    @Setter
    private String endingPoint;

    @Getter
    @Setter
    private Instant startingTime;

    @Getter
    @Setter
    private Instant endingTime;

    @Getter
    @Setter
    @JsonIgnore
    private CarVO car;

    @Getter
    @Setter
    private Integer idOfCar;

    @Getter
    @Setter
    private DriverVO driver;

    @Getter
    @Setter
    @JsonIgnore
    private boolean isActive;

    @Getter
    @Setter
    @JsonIgnore
    private boolean isFinished;

    @Getter
    @Setter
    @JsonIgnore
    private boolean isSaved;

    @Getter
    @Setter
    private int seats;

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
                tripDriver.getAvailableSeats()
        );
    }
}
