package com.exadel.ehitchhiking.daos;

import com.exadel.ehitchhiking.models.Passenger;
import com.exadel.ehitchhiking.models.TripDriver;
import com.exadel.ehitchhiking.models.TripPass;
import com.exadel.ehitchhiking.models.vo.TripPassVO;
import com.exadel.ehitchhiking.models.vo.TripsHistoryVO;

import java.util.List;

public interface ITripPassDAO extends IBasicDAO<TripPass> {

    List<TripPass> getAll();
    TripPass getTripPass(int id);
    int getAmountPass(int idTripDriver);
    List<TripPass> getHistory(int empId);
    List<TripPass> getActive(int empId);
    List<TripPass> getAllPass(int idTrip);
}
