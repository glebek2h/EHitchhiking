package com.exadel.ehitchhiking.services;

import com.exadel.ehitchhiking.models.TripDriver;
import com.exadel.ehitchhiking.models.vo.PassengerVO;
import com.exadel.ehitchhiking.models.vo.TripDriverVO;
import com.exadel.ehitchhiking.requests.Point;

import java.sql.Timestamp;
import java.time.Instant;
import java.util.List;

public interface ITripDriverService {
    String createTripDriver(String startingPoint, String endingPoint,
                          Instant startingTime,  Instant  endingTime, int idOfCar, int seats,
                          Point coordStart, Point coordEnd, float distance);


    TripDriverVO updateSave(int id, boolean isSaved);

    List<String> updateFinished(int id, boolean isFinished);

    void deleteFromHistory(int id, boolean isHistory);

    void deleteDriverTrip(int id);


    int getAvailableSeats(int id);

    TripDriverVO findTripDriver(int id);

    List<PassengerVO> getPassengers(int id);

    void updateTrip(int id,  Instant  newStart,  Instant  newEnd, String start, String end,
               int newSeats, int idNewCar, Point coordStart, Point coordEnd, float distance);

    void setToNotActive(int id);

    void updateSeats(int id, int seats);

    void updateActive(int id, boolean isActive);

    List<TripDriverVO> getAll(int idEmp, Instant startingTime, Instant endingTime, int seats,
                                     Point coordStart, Point coordEnd);
}
