package com.exadel.ehitchhiking.DAO.impl;


import com.exadel.ehitchhiking.DAO.IBasicDAO;
import com.exadel.ehitchhiking.DAO.IDriverDAO;
import com.exadel.ehitchhiking.Models.Driver;
import com.exadel.ehitchhiking.Utils.HibernateSessionFactoryUtil;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;


@Repository
public class DriverIBasicDAO extends AbstractDAO<Driver> implements IDriverDAO {


    public List<Driver> getAll() {
        List<Driver> drivers = (List<Driver>)  getCurrentSession().createQuery("From com.exadel.ehitchhiking.Models.Driver").list();
        return drivers;
    }

    public Driver getByName(String username) {
        List<Driver> drivers = (List<Driver>)  getCurrentSession().createQuery("from Driver where employee = (from Employee where userName = '" + username + "')").list();
        return drivers.get(0);
    }
    public DriverIBasicDAO(){
        setAClass(Driver.class);
    }
}