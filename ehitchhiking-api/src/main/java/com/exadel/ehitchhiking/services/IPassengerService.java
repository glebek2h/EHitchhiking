package com.exadel.ehitchhiking.services;

import com.exadel.ehitchhiking.models.Driver;
import com.exadel.ehitchhiking.models.Employee;
import com.exadel.ehitchhiking.models.Passenger;
import com.exadel.ehitchhiking.models.vo.DriverVO;

import java.util.List;

public interface IPassengerService {
    void createPassenger(Integer id);
    int findPassIdByEmail(String email);
    void updateRatePass(int idPass, float addedRate);
    void deletePassenger(String username);
    void deletePassengerId(int id);
    void addDriverToBL(int idPass, int idDriver);
    void deleteDriverToBL(int idPass, int idDriver);
    List<DriverVO> getDrivers(int idEmp);
    Passenger findByEmployeeId(int id);
}
