package com.exadel.ehitchhiking.Services;

import com.exadel.ehitchhiking.Models.Employee;

public interface IPassengerService {
    void createPassenger(Employee employee);
    int findPassIdByUsername(String username);
    void updateRatePass(String username, float addedRate);
    void deletePassenger(String username);
    void deletePassengerId(int id);
}
