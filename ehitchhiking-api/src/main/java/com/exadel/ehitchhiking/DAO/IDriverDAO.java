package com.exadel.ehitchhiking.DAO;

import com.exadel.ehitchhiking.Models.Driver;

import java.util.List;

public interface IDriverDAO {
    List<Driver> getAll();
    Driver getByName(String username);
}
