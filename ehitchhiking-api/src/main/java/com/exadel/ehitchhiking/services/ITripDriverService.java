package com.exadel.ehitchhiking.services;

import com.exadel.ehitchhiking.models.TripDriver;
import com.exadel.ehitchhiking.models.vo.TripDriverVO;

import java.sql.Timestamp;
import java.util.List;

public interface ITripDriverService {
    void createTripDriver(String startingPoint, String endingPoint,
                          Timestamp startingTime, Timestamp endingTime, int idOfCar, int seats);

    void updateTimeStart(int id, Timestamp newStart);

    void updateTimeEnd(int id, Timestamp newEnd);

    void updatePointStart(int id, String start);

    void updatePointEnd(int id, String end);

    void updateSave(int id, boolean isSaved);

    void updateFinished(int id, boolean isFinished);

    void updateHistory(int id, boolean isHistory);

    void updateSeats(int id, int newSeats);

    void updateCar(int id, int idNewCar);

    void deleteDriverTrip(int id);

    List<TripDriverVO> getAll();

    int getAvailableSeats(int id);

    TripDriverVO findTripDriver(int id);
}
