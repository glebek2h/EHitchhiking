package com.exadel.ehitchhiking.Services;

import com.exadel.ehitchhiking.Models.Driver;
import com.exadel.ehitchhiking.Models.Employee;
import com.exadel.ehitchhiking.Models.Passenger;

import java.util.List;

public interface IDriverService {
    void createDriver(Employee employee);

    int findDriverIdByUsername(String username);

    void updateRateDriver(String username, float addedRate);

    void deleteDriver(String username);

    void deleteDriverId(int id);

    void addPassToBL(int idDriver, int idPass);

    void deletePassFromBL(int idDriver, int idPass);

    List<Passenger> getPassengers(int idDriver);
}
