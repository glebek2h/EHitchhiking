package com.exadel.ehitchhiking.DAO;

import com.exadel.ehitchhiking.Models.BlacklistPass;
import com.exadel.ehitchhiking.Models.Driver;
import com.exadel.ehitchhiking.Models.Passenger;

import java.util.List;

public interface IBlackListPassDAO extends IBasicDAO<BlacklistPass>{
    List<BlacklistPass> getAll();
    BlacklistPass getByPassId(int idPass);
    BlacklistPass getBlacklistPass(int id);
}
