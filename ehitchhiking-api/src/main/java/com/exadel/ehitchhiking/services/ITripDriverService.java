package com.exadel.ehitchhiking.services;

import com.exadel.ehitchhiking.models.TripDriver;
import com.exadel.ehitchhiking.models.vo.TripDriverVO;

import java.sql.Timestamp;
import java.util.List;

public interface ITripDriverService {
    void createTripDriver(String startingPoint, String endingPoint,
                          Timestamp startingTime, Timestamp endingTime, int idOfCar, int seats);


    void updateSave(int id, boolean isSaved);

    void updateFinished(int id, boolean isFinished);

    //void updateHistory(int id, boolean isHistory);

    void deleteDriverTrip(int id);

    List<TripDriverVO> getAll();

    int getAvailableSeats(int id);

    TripDriverVO findTripDriver(int id);

    void updateTrip(int id, Timestamp newStart, Timestamp newEnd, String start, String end,
                    int newSeats, int idNewCar);

    void setToNotActive(int id);
}
