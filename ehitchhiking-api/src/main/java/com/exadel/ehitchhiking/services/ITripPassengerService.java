package com.exadel.ehitchhiking.services;

import org.springframework.data.geo.Point;

import javax.persistence.criteria.CriteriaBuilder;
import java.sql.Timestamp;
import java.time.Instant;

public interface ITripPassengerService {
    void createTripPassenger(int passId, String startingPoint,
                             String endingPoint,
                             Instant startingTime, Instant endingTime,
                             int seats, int idTripDriver, Point coordStart, Point coordEnd,
                             float distance);



    void updateSave(int id, boolean isSaved);

    void updateFinished(int id, boolean isFinished);

    void deletePassTrip(int id);

    void updateHistory(int id, boolean isHistory);

    void updateTrip(int id, Instant newStart, Instant newEnd, String start, String end,
                    int newSeats, Point coordStart, Point coordEnd, float distance);

    void updateActive(int id, boolean isActive);
}
