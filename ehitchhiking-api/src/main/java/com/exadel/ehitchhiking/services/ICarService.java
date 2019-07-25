package com.exadel.ehitchhiking.services;

import com.exadel.ehitchhiking.models.Car;
import com.exadel.ehitchhiking.models.vo.CarVO;

import java.util.List;

public interface ICarService {
    void createCar(String color, String number, String car_model,
                   int id_of_driver);

    void findCarNumber(int car_id);

    void findId(int id);

    void updateNumber(int car_id, String newNumber);

    void updateColor(int car_id, String color);

    void deleteCarId(int id);

    List<CarVO> getListCars(int idDriver);

    int getAmountCars(int idDriver);
}
