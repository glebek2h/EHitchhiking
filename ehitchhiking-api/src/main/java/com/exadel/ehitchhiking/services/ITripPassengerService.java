package com.exadel.ehitchhiking.services;

import java.sql.Timestamp;

public interface ITripPassengerService {
    void createTripPassenger(int pass, String startingPoint,
                             String endingPoint,
                             Timestamp startingTime, Timestamp endingTime,
                             int seats/*, int idTripDriver*/);

    void updateTimeStart(int id, Timestamp newStart);

    void updateTimeEnd(int id, Timestamp newEnd);

    void updatePointStart(int id, String start);

    void updatePointEnd(int id, String end);

    void updateSave(int id, boolean isSaved);

    void updateFinished(int id, boolean isFinished);

    void updateSeats(int id, int newSeats);

    void deleteDriverTrip(int id);
}
