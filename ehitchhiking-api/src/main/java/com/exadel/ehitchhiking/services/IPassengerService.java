package com.exadel.ehitchhiking.services;

import com.exadel.ehitchhiking.models.Driver;
import com.exadel.ehitchhiking.models.Employee;

import java.util.List;

public interface IPassengerService {
    void createPassenger(Employee employee);
    int findPassIdByUsername(String username);
    void updateRatePass(String username, float addedRate);
    void deletePassenger(String username);
    void deletePassengerId(int id);
    void addDriverToBL(int idPass, int idDriver);
    void deleteDriverToBL(int idPass, int idDriver);
    List<Driver> getDrivers(int idPass);
}
