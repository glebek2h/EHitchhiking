package com.exadel.ehitchhiking.DAO.impl;

import com.exadel.ehitchhiking.DAO.IDriverDAO;
import com.exadel.ehitchhiking.Models.Driver;

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
        List<Driver> drivers = (List<Driver>)  getCurrentSession().createQuery("From com.exadel.ehitchhiking.Models.Driver").list();
        return drivers;
    }

    @Override
    public Driver getByName(String username) {
        List<Driver> drivers = (List<Driver>)  getCurrentSession().createQuery("from Driver where employee = (from Employee where username = '" + username + "')").list();
        return drivers.get(0);
    }

    @Override
    public Driver getDriver(int id) {
        return (Driver) getCurrentSession().get(Driver.class, id);
    }

    @Override
    public void addPassToBL(int idDriver, int idPass) {
        //getCurrentSession().createQuery("insert into blacklist_driver values(\'"+ idDriver + "\', \'" + idPass +"\'");
        getCurrentSession();
    }

    @Override
    public void deletePassFromBL(int idDriver, int idPass) {
        //getCurrentSession().createQuery("delete from blacklist_driver where driver_id = \'" + idDriver + "\' and pass_id = \'" + idPass + "\'");
    }
}
