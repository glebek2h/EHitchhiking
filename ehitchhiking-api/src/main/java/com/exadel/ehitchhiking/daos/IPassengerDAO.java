package com.exadel.ehitchhiking.daos;

import com.exadel.ehitchhiking.models.Passenger;

public interface IPassengerDAO extends IBasicDAO<Passenger> {


    Passenger getByEmail(String email);

    Passenger getPassenger(int id);

    Passenger getByEmployeeId(int id);
}
