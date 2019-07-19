package com.exadel.ehitchhiking.DAO;

import com.exadel.ehitchhiking.Models.Car;

import java.util.List;

public interface ICarsDAO extends IBasicDAO<Car>{
    List<Car> getAll();
    String getNumber(int id);
    List<Car> getAllUsers(String username);
    List<Car> getListCars(int idDriver);

}
