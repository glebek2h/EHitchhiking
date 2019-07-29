package com.exadel.ehitchhiking.daos;

import com.exadel.ehitchhiking.models.Car;
import com.exadel.ehitchhiking.models.Driver;

import java.util.List;

public interface ICarDAO extends IBasicDAO<Car> {
    List<Car> getAll();

    String getNumber(int id);

    List<Car> getListCars(int idDriver);

    Car getCar(int id);
}
