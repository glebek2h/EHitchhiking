package com.exadel.ehitchhiking.DAO.impl;

import com.exadel.ehitchhiking.DAO.IDriverDAO;
import com.exadel.ehitchhiking.Models.Driver;

import org.springframework.stereotype.Repository;

import java.util.List;


@Repository("DriverIBasicDAO")
public class DriverDAO extends AbstractDAO<Driver> implements IDriverDAO {


    public List<Driver> getAll() {
        List<Driver> drivers = (List<Driver>)  getCurrentSession().createQuery("From com.exadel.ehitchhiking.Models.Driver").list();
        return drivers;
    }

    public Driver getByName(String username) {
        List<Driver> drivers = (List<Driver>)  getCurrentSession().createQuery("from Driver where employee = (from Employee where username = '" + username + "')").list();
        return drivers.get(0);
    }
    public DriverDAO(){
        setAClass(Driver.class);
    }
}
