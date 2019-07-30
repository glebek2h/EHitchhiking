package com.exadel.ehitchhiking.services;

import com.exadel.ehitchhiking.models.TripDriver;
import com.exadel.ehitchhiking.models.vo.TripDriverVO;
import org.springframework.data.geo.Point;

import java.sql.Timestamp;
import java.util.List;

public interface ITripDriverService {
    void createTripDriver(String startingPoint, String endingPoint,
                          Timestamp startingTime, Timestamp endingTime, int idOfCar, int seats,
                          Point coordStart, Point coordEnd, float distance);


    void updateSave(int id, boolean isSaved);

    void updateFinished(int id, boolean isFinished);

    void deleteFromHistory(int id, boolean isHistory);

    void deleteDriverTrip(int id);

    List<TripDriverVO> getAll(Timestamp startingTime, Timestamp endingTime, int seats,
                              Point coordStart, Point coordEnd);

    int getAvailableSeats(int id);

    TripDriverVO findTripDriver(int id);

    void updateTrip(int id, Timestamp newStart, Timestamp newEnd, String start, String end,
               int newSeats, int idNewCar, Point coordStart, Point coordEnd, float distance);

    void setToNotActive(int id);

    void updateSeats(int id, int seats);

    void updateActive(int id, boolean isActive);
}
