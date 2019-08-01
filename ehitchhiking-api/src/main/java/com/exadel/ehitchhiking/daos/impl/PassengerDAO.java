package com.exadel.ehitchhiking.daos.impl;

import com.exadel.ehitchhiking.daos.IPassengerDAO;
import com.exadel.ehitchhiking.models.Passenger;

import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public class PassengerDAO extends AbstractDAO<Passenger> implements IPassengerDAO {

    public PassengerDAO() {
        super(Passenger.class);
    }

    @Override
    public Passenger getByEmail(String email) {
        Passenger passenger = (Passenger)  getCurrentSession().createQuery("from com.exadel.ehitchhiking.models.Passenger where Employee.email = '" + email + "'").uniqueResult();
        return passenger;
    }

    @Override
    public Passenger getByEmployeeId(int id) {
        return (Passenger) getCurrentSession().createQuery("from Passenger where employee.id = '" + id + "'").uniqueResult();

    }


    @Override
    public Passenger getPassenger(int id) {
        return getCurrentSession().get(Passenger.class, id);
    }
}