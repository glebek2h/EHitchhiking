package com.exadel.ehitchhiking.DAO;

import com.exadel.ehitchhiking.Models.Cars;
import com.exadel.ehitchhiking.Models.TripDriver;
import com.exadel.ehitchhiking.Models.TripPass;

import java.util.List;

public interface ITripDriverDAO extends IBasicDAO<TripDriver> {

    List<TripDriver> getAll();
    Cars getCar(String id);
    TripPass getTripPass(int id);
}
