package com.exadel.ehitchhiking.daos;

import com.exadel.ehitchhiking.models.Passenger;

import java.util.List;

public interface IPassengerDAO extends IBasicDAO<Passenger>{

    List<Passenger> getAll();
    Passenger getByName(String username);
    Passenger getPassenger(int id);
}
