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

    public TripDriverDAO() {
        super(TripDriver.class);
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
