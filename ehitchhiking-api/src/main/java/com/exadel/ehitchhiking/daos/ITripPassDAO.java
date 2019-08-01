package com.exadel.ehitchhiking.daos;

import com.exadel.ehitchhiking.models.TripPass;

import java.util.List;

public interface ITripPassDAO extends IBasicDAO<TripPass> {

    List<TripPass> getActive(int empId);

    List<TripPass> getHistory(int empId);

    List<TripPass> getAllPass(int idTrip);

    int getAmountPass(int idTripDriver);

    TripPass getTripPass(int id);
}
