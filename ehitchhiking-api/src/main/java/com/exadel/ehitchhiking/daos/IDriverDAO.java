package com.exadel.ehitchhiking.daos;

import com.exadel.ehitchhiking.models.Driver;

import java.util.List;

public interface IDriverDAO  extends IBasicDAO<Driver>{
    List<Driver> getAll();
    Driver getByEmail(String email);
    Driver getDriver(int id);
    Driver getByEmployeeId(int id);
}
