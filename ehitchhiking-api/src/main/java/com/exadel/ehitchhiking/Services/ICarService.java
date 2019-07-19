package com.exadel.ehitchhiking.Services;

import com.exadel.ehitchhiking.Models.Car;

import java.util.List;

public interface ICarService {
    void createCar(String color, String number, String car_model,
                   int id_of_driver);

    void findCarNumber(int car_id);

    void findId(int id);

    void findAllCarsOfUser(String username);

    void updateNumber(int car_id, String newNumber);

    void updateColor(int car_id, String color);

    void deleteCarId(int id);

    List<Car> getListCars(int idDriver);

    int getAmountCars(int idDriver);
}
