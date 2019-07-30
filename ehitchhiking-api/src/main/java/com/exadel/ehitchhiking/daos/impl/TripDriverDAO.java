package com.exadel.ehitchhiking.daos.impl;

import com.exadel.ehitchhiking.daos.ITripDriverDAO;
import com.exadel.ehitchhiking.models.Car;
import com.exadel.ehitchhiking.models.TripDriver;
import com.exadel.ehitchhiking.models.TripPass;

import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public class TripDriverDAO extends AbstractDAO<TripDriver> implements ITripDriverDAO {

    public TripDriverDAO(SessionFactory sessionFactory) {
        super(sessionFactory);
    }

    @Override
    public List<TripDriver> getAll() {
        List<TripDriver> trips_drivers = (List<TripDriver>) getCurrentSession().createQuery("From TripDriver ").list();
        return trips_drivers;
    }

    @Override
    public TripDriver getTripDriver(int id) {
        return getCurrentSession().get(TripDriver.class, id);
    }


    @Override
    public int getAvailableSeats(int id) {

        int seats = (int) getCurrentSession().createQuery("select availableSeats From TripDriver where id = '" +  id +  "'").uniqueResult();
        return seats;
    }

}
