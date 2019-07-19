package com.exadel.ehitchhiking.Services.impl;

import com.exadel.ehitchhiking.DAO.ICarDAO;
import com.exadel.ehitchhiking.DAO.IDriverDAO;
import com.exadel.ehitchhiking.Models.Car;
import com.exadel.ehitchhiking.Services.ICarService;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
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

    public void createCar(String color, String number, String car_model,
                          int id_of_driver) {
        dao.save(new Car(color, number, car_model,
                driverDao.get(id_of_driver)));
    }

    public void findCarNumber(int car_id) {
        dao.getNumber(car_id);
    }

    public void findId(int id) {
        dao.get(id);
    }

    public void findAllCarsOfUser(String username) {
        dao.getAllUsers(username);
    }

    public void updateNumber(int car_id, String newNumber) {
        Car car = dao.get(car_id);
        car.setNumber(newNumber);
        dao.update(car);
    }

    public void updateColor(int car_id, String color) {
        Car car = dao.get(car_id);
        car.setColor(color);
        dao.update(car);
    }

    public void deleteCarId(int id) {
        dao.delete(dao.get(id));
    }

    public List<Car> getListCars(int idDriver) {
        return dao.getListCars(idDriver);
    }


    public int getAmountCars(int idDriver) {
        return dao.getListCars(idDriver).size();
    }
}