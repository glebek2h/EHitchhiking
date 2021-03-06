package com.exadel.ehitchhiking.services;

import com.exadel.ehitchhiking.models.vo.CarVO;

import java.util.List;

public interface ICarService {
    CarVO createCar(String color, String number, String carModel,
                   int idOfDriver) throws Exception;

    void findCarNumber(int carId);

    void findId(int id);

    void updateCar(CarVO newCar);

    void deleteCarId(int id);

    List<CarVO> getListCars(int empId);

    int getAmountCars(int idDriver);

    void deletedCar(int carId) throws Exception;
}
