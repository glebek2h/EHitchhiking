package com.exadel.ehitchhiking.Services;

import com.exadel.ehitchhiking.Models.Employee;

public interface IDriverService {
    void createDriver(Employee employee);

    int findDriverIdByUsername(String username);

    void updateRateDriver(String username, float addedRate);

    void deleteDriver(String username);

    void deleteDriverId(int id);
}
