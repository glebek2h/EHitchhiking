package com.exadel.ehitchhiking.daos.impl;

import com.exadel.ehitchhiking.daos.ICarDAO;
import com.exadel.ehitchhiking.models.Car;

import com.exadel.ehitchhiking.models.Driver;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CarDAO extends AbstractDAO<Car> implements ICarDAO {


    public CarDAO() {
        super(Car.class);
    }

    @Override
    public String getNumber(int id) {
        List<String> emps = (List<String>) getCurrentSession().createQuery("select number From com.exadel.ehitchhiking.models.Car where id = '" + id + "'").list();
        return emps.get(0);
    }

    @Override
    public List<Car> getListCars(int empId) {
        List<Car> cars = (List<Car>)  getCurrentSession().createQuery("From com.exadel.ehitchhiking.models.Car where driver.employee.id = '" + empId + "' and isDeleted = false").list();
        return cars;
    }

    @Override
    public Car getCar(int id) {
        return getCurrentSession().get(Car.class, id);
    }
}
