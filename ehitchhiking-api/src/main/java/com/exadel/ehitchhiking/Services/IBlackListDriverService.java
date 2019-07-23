package com.exadel.ehitchhiking.Services;

public interface IBlackListDriverService {
    void createBlackList(int userId);

    void deleteBlackList(int userId);

    void addPass(int driverId, int passId);

    void deletePass(int driverId, int passId);
}
