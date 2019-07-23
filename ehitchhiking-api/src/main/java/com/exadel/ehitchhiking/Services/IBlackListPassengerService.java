package com.exadel.ehitchhiking.Services;

import com.exadel.ehitchhiking.Models.BlacklistPass;
import com.exadel.ehitchhiking.Models.Driver;

import java.util.List;

public interface IBlackListPassengerService {
    void createBlackList(int userId);

    void deleteBlackList(int userId);

    void addPass(int passId, int driverId);

    void deletePass(int passId, int driverId);

    List<Driver> getAll(int passId);

    BlacklistPass getBlacklist(int passId);
}
