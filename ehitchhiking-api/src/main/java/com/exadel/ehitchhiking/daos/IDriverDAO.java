package com.exadel.ehitchhiking.daos;

import com.exadel.ehitchhiking.models.Driver;

import java.util.List;

public interface IDriverDAO  extends IBasicDAO<Driver>{
    List<Driver> getAll();
    Driver getByName(String username);
    Driver getDriver(int id);
    int getByEmployeeId(int id);
}
