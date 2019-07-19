package com.exadel.ehitchhiking.Services;

public interface IBlackListPassengerService {
    void createBlackList(int userId);

    void deleteBlackList(int userId);

    void addPass(int passId, int driverId);

    void deletePass(int passId, int driverId);
}
