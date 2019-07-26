package com.exadel.ehitchhiking.services;

import com.exadel.ehitchhiking.models.Employee;
import com.exadel.ehitchhiking.models.Passenger;
import com.exadel.ehitchhiking.models.vo.PassengerVO;

import java.util.List;

public interface IDriverService {
    void createDriver(Employee employee);

    int findDriverIdByUsername(String username);

    void updateRateDriver(String username, float addedRate);

    void deleteDriver(String username);

    void deleteDriverId(int id);

    void addPassToBL(int idDriver, int idPass);

    void deletePassFromBL(int idDriver, int idPass);

    List<PassengerVO> getPassengers(int idDriver);
}
