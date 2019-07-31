package com.exadel.ehitchhiking.daos;

import com.exadel.ehitchhiking.models.Car;
import com.exadel.ehitchhiking.models.TripDriver;
import com.exadel.ehitchhiking.models.TripPass;
import com.exadel.ehitchhiking.models.vo.TripDriverVO;
import com.exadel.ehitchhiking.models.vo.TripsHistoryVO;

import java.util.List;

public interface ITripDriverDAO extends IBasicDAO<TripDriver> {

    List<TripDriver> getAll();
    TripDriver getTripDriver(int id);
    int getAvailableSeats(int id);
    List<TripPass> getTripPass (int id);
    List<TripDriver> getHistory(int empId);
    List<TripDriver> getActive(int empId);
}
