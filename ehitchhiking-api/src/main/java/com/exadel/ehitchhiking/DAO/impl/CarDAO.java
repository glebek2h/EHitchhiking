package com.exadel.ehitchhiking.DAO.impl;

import com.exadel.ehitchhiking.DAO.ICarDAO;
import com.exadel.ehitchhiking.Models.Car;

import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("CarsIBasicDAO")
public class CarDAO extends AbstractDAO<Car> implements ICarDAO {


    public List<Car> getAll() {
        List<Car> cars = (List<Car>)  getCurrentSession().createQuery("From com.exadel.ehitchhiking.Models.Car").list();
        return cars;
    }

    public String getNumber(int id){
        List<String> emps = (List<String>)  getCurrentSession().createQuery("select number From com.exadel.ehitchhiking.Models.Car where id = '" + id + "'").list();
        return emps.get(0);
    }

    public List<Car> getAllUsers(String username) {
        List<Car> cars = (List<Car>)  getCurrentSession().createQuery("From com.exadel.ehitchhiking.Models.Car where driver = (from Driver where employee = (from Employee where username = '" + username + "'))").list();
        return cars;
    }

    public List<Car> getListCars(int idDriver){
        List<Car> cars = (List<Car>)  getCurrentSession().createQuery("From com.exadel.ehitchhiking.Models.Car where driver.id = '" + idDriver + "'").list();
        return cars;
    }

    public CarDAO(){
        setAClass(Car.class);
    }
}
