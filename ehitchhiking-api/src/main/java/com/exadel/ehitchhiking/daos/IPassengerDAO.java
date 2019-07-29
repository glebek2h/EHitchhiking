package com.exadel.ehitchhiking.daos;

import com.exadel.ehitchhiking.models.Passenger;

import java.util.List;

public interface IPassengerDAO extends IBasicDAO<Passenger>{

    List<Passenger> getAll();
    Passenger getByEmail(String email);
    Passenger getPassenger(int id);
    int getByEmployeeId(int id);
}
