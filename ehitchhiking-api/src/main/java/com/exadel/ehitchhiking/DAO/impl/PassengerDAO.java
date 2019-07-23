package com.exadel.ehitchhiking.DAO.impl;

import com.exadel.ehitchhiking.DAO.IPassengerDAO;
import com.exadel.ehitchhiking.Models.Passenger;

import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public class PassengerDAO extends AbstractDAO<Passenger> implements IPassengerDAO {

    public PassengerDAO(SessionFactory sessionFactory) {
        super(sessionFactory);
    }

    @Override
    public List<Passenger> getAll() {
        List<Passenger> passs = (List<Passenger>)  getCurrentSession().createQuery("From com.exadel.ehitchhiking.Models.Passenger").list();
        return passs;
    }

    @Override
    public Passenger getByName(String username) {
        Passenger passenger = (Passenger)  getCurrentSession().createQuery("from Passenger where employee = (from Employee where username = '" + username + "')").uniqueResult();
        return passenger;
    }

    @Override
    public Passenger getPassenger(int id) {
        return getCurrentSession().get(Passenger.class, id);
    }

    @Override
    public void addDriverToBL(int idPass, int idDriver) {
        getCurrentSession().createQuery("insert into blacklist_pass values(\'"+ idPass + "\', \'" + idDriver +"\'");
    }

    @Override
    public void deleteDriverFromBL(int idPass, int idDriver) {
        getCurrentSession().createQuery("delete from blacklist_pass where pass_id = \'" + idPass + "\' and driver_id = \'" + idDriver + "\'");
    }
}
