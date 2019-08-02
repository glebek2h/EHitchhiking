package com.exadel.ehitchhiking.services;

import com.exadel.ehitchhiking.models.TripPass;
import com.exadel.ehitchhiking.models.vo.DriverVO;
import com.exadel.ehitchhiking.models.vo.TripPassVO;
import org.springframework.data.geo.Point;

import javax.persistence.criteria.CriteriaBuilder;
import java.sql.Timestamp;
import java.time.Instant;

public interface ITripPassengerService {
    void createTripPassenger(int empId, String startingPoint,
                             String endingPoint,
                             Instant startingTime, Instant endingTime,
                             int seats, int idTripDriver, Point coordStart, Point coordEnd,
                             float distance);



    TripPassVO updateSave(int id, boolean isSaved);

    void updateFinished(int id, boolean isFinished);

    void deletePassTrip(int id);

    void updateHistory(int id, boolean isHistory);

    void updateTrip(int id, Instant newStart, Instant newEnd, String start, String end,
                    int newSeats, Point coordStart, Point coordEnd, float distance);

    void updateActive(int id, boolean isActive);


    TripPassVO findTripPass(int id);

    DriverVO findIdDriver (int id);
}
