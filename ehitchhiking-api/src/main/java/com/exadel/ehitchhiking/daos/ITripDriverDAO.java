package com.exadel.ehitchhiking.daos;

import com.exadel.ehitchhiking.models.Car;
import com.exadel.ehitchhiking.models.TripDriver;
import com.exadel.ehitchhiking.models.TripPass;

import java.util.List;

public interface ITripDriverDAO extends IBasicDAO<TripDriver> {

    List<TripDriver> getAll();
    TripDriver getTripDriver(int id);
    int getAvailableSeats(int id);
}
