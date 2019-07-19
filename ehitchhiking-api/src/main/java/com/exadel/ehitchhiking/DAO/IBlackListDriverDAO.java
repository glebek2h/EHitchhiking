package com.exadel.ehitchhiking.DAO;

import com.exadel.ehitchhiking.Models.BlacklistDriver;
import com.exadel.ehitchhiking.Models.Driver;
import com.exadel.ehitchhiking.Models.Passenger;

import java.util.List;

public interface IBlackListDriverDAO extends IBasicDAO<BlacklistDriver>{
    List<BlacklistDriver> getAll();
    Driver getDriver(int id);
    Passenger getPassenger(int id);
    BlacklistDriver getByDriverId(int idDriver);
}
