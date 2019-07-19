package com.exadel.ehitchhiking.DAO;

import com.exadel.ehitchhiking.Models.Car;
import com.exadel.ehitchhiking.Models.TripDriver;
import com.exadel.ehitchhiking.Models.TripPass;

import java.util.List;

public interface ITripDriverDAO extends IBasicDAO<TripDriver> {

    List<TripDriver> getAll();
    Car getCar(String id);
    TripPass getTripPass(int id);
}
