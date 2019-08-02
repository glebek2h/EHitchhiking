package com.exadel.ehitchhiking.daos;

import com.exadel.ehitchhiking.models.TripDriver;
import com.exadel.ehitchhiking.models.TripPass;

import java.util.List;

public interface ITripDriverDAO extends IBasicDAO<TripDriver> {

    TripDriver getTripDriver(int id);

    int getAvailableSeats(int id);

    List<TripDriver> getActive(int empId);

    List<TripDriver> getHistory(int empId);

    List<TripPass> getTripPass(int id);
}
