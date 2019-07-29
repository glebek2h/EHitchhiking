package com.exadel.ehitchhiking.services;

import org.springframework.data.geo.Point;

import java.sql.Timestamp;

public interface ITripPassengerService {
    void createTripPassenger(int passId, String startingPoint,
                             String endingPoint,
                             Timestamp startingTime, Timestamp endingTime,
                             int seats, int idTripDriver, Point coordStart, Point coordEnd,
                             float distance);



    void updateSave(int id, boolean isSaved);

    void updateFinished(int id, boolean isFinished);

    void deletePassTrip(int id);

    void updateHistory(int id, boolean isHistory);

    void updateTrip(int id, Timestamp newStart, Timestamp newEnd, String start, String end,
                    int newSeats, Point coordStart, Point coordEnd, float distance);

    void updateActive(int id, boolean isActive);
}
