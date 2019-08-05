package com.exadel.ehitchhiking.services;

import com.exadel.ehitchhiking.models.Passenger;
import com.exadel.ehitchhiking.models.vo.DriverVO;
import com.exadel.ehitchhiking.requests.RequestId;

import java.util.List;

public interface IPassengerService {
    void createPassenger(Integer id);
    int findPassIdByEmail(String email);
    void updateRatePass(int idPass, float addedRate);
    void deletePassenger(String email);
    void deletePassengerId(int id);
    void addDriverToBL(int idTrip, List<RequestId> list);
    void deleteDriverFromBL(int idEmp, int idDriver);
    List<DriverVO> getDrivers(int idPass);
    Passenger findByEmployeeId(int id);
}
