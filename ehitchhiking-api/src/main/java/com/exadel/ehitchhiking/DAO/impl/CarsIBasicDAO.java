package com.exadel.ehitchhiking.DAO.impl;

import com.exadel.ehitchhiking.DAO.ICarsDAO;
import com.exadel.ehitchhiking.Models.Car;

import org.springframework.stereotype.Repository;

import java.util.List;


@Repository("CarsIBasicDAO")
public class CarsIBasicDAO extends AbstractDAO<Car> implements ICarsDAO {


    public List<Car> getAll() {
        List<Car> cars = (List<Car>)  getCurrentSession().createQuery("From com.exadel.ehitchhiking.Models.Car").list();
        return cars;
    }

    public String getNumber(int id){
        List<String> emps = (List<String>)  getCurrentSession().createQuery("select veh_number From com.exadel.ehitchhiking.Models.Car where car_id = '" + id + "'").list();
        return emps.get(0);
    }

    public List<Car> getAllUsers(String username) {
        List<Car> cars = (List<Car>)  getCurrentSession().createQuery("From com.exadel.ehitchhiking.Models.Car where drive = (from Driver where employee = (from Employee where userName = '" + username + "'))").list();
        return cars;
    }

    public List<Car> getListCars(int idDriver){
        List<Car> cars = (List<Car>)  getCurrentSession().createQuery("From com.exadel.ehitchhiking.Models.Car where drive.id = '" + idDriver + "'").list();
        return cars;
    }

    public CarsIBasicDAO(){
        setAClass(Car.class);
    }
}
