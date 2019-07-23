package com.exadel.ehitchhiking.DAO;

import com.exadel.ehitchhiking.Models.Passenger;
import com.exadel.ehitchhiking.Models.TripDriver;
import com.exadel.ehitchhiking.Models.TripPass;

import java.util.List;

public interface ITripPassDAO extends IBasicDAO<TripPass> {

    List<TripPass> getAll();
    TripPass getTripPass(int id);
}
