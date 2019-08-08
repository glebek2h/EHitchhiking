package com.exadel.ehitchhiking.services;

import com.exadel.ehitchhiking.models.Driver;
import com.exadel.ehitchhiking.models.Employee;
import com.exadel.ehitchhiking.models.Passenger;
import com.exadel.ehitchhiking.models.vo.PassengerVO;
import com.exadel.ehitchhiking.requests.RequestId;

import java.util.List;

public interface IDriverService {
    void createDriver(Integer id);

    int findDriverIdByEmail(String email);

    void updateRateDriver(int idDriver, float addedRate);

    void deleteDriver(String email);

    void deleteDriverId(int id);

    void addPassToBL(int idTrip, List<RequestId> list);

    void deletePassFromBL(int idEmp, int idPass);

    List<PassengerVO> getPassengers(int idEmp);

    Driver findIdByemployeeId(int id);
}
