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

    @Override
    public List<TripPass> getTripPass (int id) {
        return (List<TripPass>) getCurrentSession().createQuery("From TripPass where tripDriver.id = '" +  id +  "' and isActive = false and isFinished = true ").list();

    }

    @Override
    public List<TripDriver> getHistory(int empId){
        return (List<TripDriver>) getCurrentSession().createQuery("from TripDriver where car.driver.employee.id = '" + empId + "' and isHistory = true and isActive = false").list();
    }

    @Override
    public List<TripDriver> getActive(int empId){
        return (List<TripDriver>) getCurrentSession().createQuery("from TripDriver where car.driver.employee.id = '" + empId + "' and isActive = true ").list();
    }

    @Override
    public List<TripDriver> getAllActive() {
        return (List<TripDriver>) getCurrentSession().createQuery("from TripDriver where isActive = true").list();
    }
}
