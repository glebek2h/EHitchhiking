package com.exadel.ehitchhiking.daos.impl;

import com.exadel.ehitchhiking.daos.IDriverDAO;
import com.exadel.ehitchhiking.models.Driver;

import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public class DriverDAO extends AbstractDAO<Driver> implements IDriverDAO {


    public DriverDAO() {
        super(Driver.class);
    }

    @Override
    public Driver getByEmail(String email) {
        return (Driver) getCurrentSession().createQuery("from Driver where employee = (from Employee where email = '" + email + "')").uniqueResult();
    }

    @Override
    public Driver getByEmployeeId(int id) {
        return (Driver) getCurrentSession().createQuery("from Driver where employee = (from Employee where id = '" + id + "')").uniqueResult();

    }

    @Override
    public Driver getDriver(int id) {
        return getCurrentSession().get(Driver.class, id);
    }
}
