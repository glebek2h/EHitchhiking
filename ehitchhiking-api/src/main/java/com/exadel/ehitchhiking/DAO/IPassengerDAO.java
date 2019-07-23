package com.exadel.ehitchhiking.DAO;

import com.exadel.ehitchhiking.Models.Passenger;

import java.util.List;

public interface IPassengerDAO extends IBasicDAO<Passenger>{

    List<Passenger> getAll();
    Passenger getByName(String username);
    Passenger getPassenger(int id);
    void addDriverToBL(int idPass, int idDriver);
    void deleteDriverFromBL(int idPass, int idDriver);
}
