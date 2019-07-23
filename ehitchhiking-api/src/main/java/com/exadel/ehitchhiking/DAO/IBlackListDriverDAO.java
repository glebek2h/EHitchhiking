package com.exadel.ehitchhiking.DAO;

import com.exadel.ehitchhiking.Models.BlacklistDriver;
import com.exadel.ehitchhiking.Models.Driver;
import com.exadel.ehitchhiking.Models.Passenger;
import com.exadel.ehitchhiking.Services.impl.BlackListDriverService;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface IBlackListDriverDAO extends IBasicDAO<BlacklistDriver>{
    List<BlacklistDriver> getAll();
    BlacklistDriver getByDriverId(int idDriver);
    BlacklistDriver getBlackList(int id);
}
