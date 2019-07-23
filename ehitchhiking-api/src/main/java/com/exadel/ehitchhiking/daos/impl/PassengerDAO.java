package com.exadel.ehitchhiking.daos.impl;

import com.exadel.ehitchhiking.daos.IPassengerDAO;
import com.exadel.ehitchhiking.models.Passenger;

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
        List<Passenger> passs = (List<Passenger>)  getCurrentSession().createQuery("From com.exadel.ehitchhiking.models.Passenger").list();
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
}
