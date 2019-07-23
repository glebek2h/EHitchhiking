package com.exadel.ehitchhiking.DAO.impl;

import com.exadel.ehitchhiking.DAO.ITripDriverDAO;
import com.exadel.ehitchhiking.Models.Car;
import com.exadel.ehitchhiking.Models.TripDriver;
import com.exadel.ehitchhiking.Models.TripPass;

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
        List<TripDriver> trips_drivers = (List<TripDriver>) getCurrentSession().createQuery("From com.exadel.ehitchhiking.Models.TripDriver").list();
        return trips_drivers;
    }

    @Override
    public TripDriver getTripDriver(int id) {
        return getCurrentSession().get(TripDriver.class, id);
    }
}
