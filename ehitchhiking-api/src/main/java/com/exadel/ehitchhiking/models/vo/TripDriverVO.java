package com.exadel.ehitchhiking.models.vo;

import com.exadel.ehitchhiking.models.Car;
import com.exadel.ehitchhiking.models.Driver;
import com.exadel.ehitchhiking.models.TripDriver;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import org.springframework.stereotype.Service;

import javax.persistence.Id;
import java.time.Instant;
import java.util.Date;

@Data
@AllArgsConstructor
public class TripDriverVO {


    @Getter
    @Id
    private Integer id;

    @Getter
    private String startingPoint;

    @Getter
    private String endingPoint;

    @Getter
    private Instant startingTime;

    @Getter
    private Instant endingTime;

    @Getter
    private CarVO car;

    @Getter
    private Integer idOfCar;

    @Getter
    private DriverVO driver;

    @Getter
    private boolean isActive;

    @Getter
    private boolean isFinished;

    @Getter
    private boolean isSaved;

    @Getter
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
