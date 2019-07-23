package com.exadel.ehitchhiking.Services.impl;

import com.exadel.ehitchhiking.DAO.ICarDAO;
import com.exadel.ehitchhiking.DAO.IDriverDAO;
import com.exadel.ehitchhiking.Models.Car;
import com.exadel.ehitchhiking.Models.Driver;
import com.exadel.ehitchhiking.Services.ICarService;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional(rollbackOn = Exception.class)
@NoArgsConstructor
public class CarService implements ICarService {

    @Autowired
    private ICarDAO dao;

    @Autowired
    private IDriverDAO driverDao;

    @Override
    public void createCar(String color, String number, String carModel,
                          int idOfDriver) {
        dao.save(new Car(color, number, carModel, driverDao.getDriver(idOfDriver)));
    }

    @Override
    public void findCarNumber(int carId) {
        dao.getNumber(carId);
    }

    @Override
    public void findId(int id) {
        dao.getCar(id);
    }

    @Override
    public void updateNumber(int carId, String newNumber) {
        Car car = dao.getCar(carId);
        car.setNumber(newNumber);
        dao.update(car);
    }

    @Override
    public void updateColor(int carId, String color) {
        Car car = dao.getCar(carId);
        car.setColor(color);
        dao.update(car);
    }

    @Override
    public void deleteCarId(int id) {
        dao.delete(dao.getCar(id));
    }

    @Override
    public List<Car> getListCars(int idDriver) {
        return dao.getListCars(idDriver);
    }

    @Override
    public int getAmountCars(int idDriver) {
        return dao.getListCars(idDriver).size();
    }
}