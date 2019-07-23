package com.exadel.ehitchhiking.DAO;

import com.exadel.ehitchhiking.Models.Car;

import java.util.List;

public interface ICarDAO extends IBasicDAO<Car>{
    List<Car> getAll();
    String getNumber(int id);
    List<Car> getListCars(int idDriver);
    Car getCar(int id);
}
