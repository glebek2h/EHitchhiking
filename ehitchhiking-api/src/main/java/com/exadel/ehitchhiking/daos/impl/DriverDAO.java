package com.exadel.ehitchhiking.daos.impl;

import com.exadel.ehitchhiking.daos.IDriverDAO;
import com.exadel.ehitchhiking.models.Driver;

import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public class DriverDAO extends AbstractDAO<Driver> implements IDriverDAO {


    public DriverDAO(SessionFactory sessionFactory) {
        super(sessionFactory);
    }

    @Override
    public List<Driver> getAll() {
        List<Driver> drivers = (List<Driver>)  getCurrentSession().createQuery("From com.exadel.ehitchhiking.models.Driver").list();
        return drivers;
    }

    @Override
    public Driver getByName(String username) {
        List<Driver> drivers = (List<Driver>)  getCurrentSession().createQuery("from Driver where employee = (from Employee where email = '" + username + "')").list();
        return drivers.get(0);
    }

    @Override
    public int getByEmployeeId(int id) {
        return (int) getCurrentSession().createQuery("from Driver where employee = (from Employee where id = '" + id + "')").uniqueResult();

    }

    @Override
    public Driver getDriver(int id) {
        return getCurrentSession().get(Driver.class, id);
    }
}
