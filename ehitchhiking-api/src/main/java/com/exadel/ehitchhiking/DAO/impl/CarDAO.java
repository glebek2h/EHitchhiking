package com.exadel.ehitchhiking.DAO.impl;

import com.exadel.ehitchhiking.DAO.ICarDAO;
import com.exadel.ehitchhiking.Models.Car;

import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CarDAO extends AbstractDAO<Car> implements ICarDAO {


    public CarDAO(SessionFactory sessionFactory) {
        super(sessionFactory);
    }

    @Override
    public List<Car> getAll() {
        List<Car> cars = (List<Car>)  getCurrentSession().createQuery("From com.exadel.ehitchhiking.Models.Car").list();
        return cars;
    }

    @Override
    public String getNumber(int id){
        List<String> emps = (List<String>)  getCurrentSession().createQuery("select number From com.exadel.ehitchhiking.Models.Car where id = '" + id + "'").list();
        return emps.get(0);
    }

    @Override
    public List<Car> getListCars(int idDriver){
        List<Car> cars = (List<Car>)  getCurrentSession().createQuery("From com.exadel.ehitchhiking.Models.Car where driver.id = '" + idDriver + "'").list();
        return cars;
    }

    @Override
    public Car getCar(int id) {
        return getCurrentSession().get(Car.class, id);
    }
}
