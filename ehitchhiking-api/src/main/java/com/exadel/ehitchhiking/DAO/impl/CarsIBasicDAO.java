package com.exadel.ehitchhiking.DAO.impl;

import com.exadel.ehitchhiking.DAO.IBasicDAO;
import com.exadel.ehitchhiking.DAO.ICarsDAO;
import com.exadel.ehitchhiking.Models.Cars;

import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;


@Repository("CarsIBasicDAO")
public class CarsIBasicDAO extends AbstractDAO<Cars> implements ICarsDAO {


    public List<Cars> getAll() {
        List<Cars> cars = (List<Cars>)  getCurrentSession().createQuery("From com.exadel.ehitchhiking.Models.Cars").list();
        return cars;
    }

    public String getNumber(int id){
        List<String> emps = (List<String>)  getCurrentSession().createQuery("select veh_number From com.exadel.ehitchhiking.Models.Cars where car_id = '" + id + "'").list();
        return emps.get(0);
    }

    public List<Cars> getAllUsers(String username) {
        List<Cars> cars = (List<Cars>)  getCurrentSession().createQuery("From com.exadel.ehitchhiking.Models.Cars where drive = (from Driver where employee = (from Employee where userName = '" + username + "'))").list();
        return cars;
    }

    public List<Cars> getListCars(int idDriver){
        List<Cars> cars = (List<Cars>)  getCurrentSession().createQuery("From com.exadel.ehitchhiking.Models.Cars where drive.id = '" + idDriver + "'").list();
        return cars;
    }

    public CarsIBasicDAO(){
        setAClass(Cars.class);
    }
}
