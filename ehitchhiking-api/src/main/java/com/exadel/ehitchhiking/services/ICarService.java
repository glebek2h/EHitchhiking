package com.exadel.ehitchhiking.services;

import com.exadel.ehitchhiking.models.vo.CarVO;

import java.util.List;

public interface ICarService {
    void createCar(String color, String number, String carModel,
                   int idOfDriver);

    void findCarNumber(int carId);

    void findId(int id);

    void updateNumber(int carId, String newNumber);

    void updateColor(int carId, String color);

    void deleteCarId(int id);

    List<CarVO> getListCars(int idDriver);

    int getAmountCars(int idDriver);

    void deletedCar(int carId);
}
