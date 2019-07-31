package com.exadel.ehitchhiking.daos;

import com.exadel.ehitchhiking.models.Passenger;
import com.exadel.ehitchhiking.models.TripDriver;
import com.exadel.ehitchhiking.models.TripPass;

import java.util.List;

public interface ITripPassDAO extends IBasicDAO<TripPass> {

    List<TripPass> getAll();
    TripPass getTripPass(int id);
    int getAmountPass(int idTripDriver);
}
