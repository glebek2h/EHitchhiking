package com.exadel.ehitchhiking.DAO.impl;

import com.exadel.ehitchhiking.DAO.IBasicDAO;
import com.exadel.ehitchhiking.DAO.ITripPassDAO;
import com.exadel.ehitchhiking.Models.Passenger;
import com.exadel.ehitchhiking.Models.TripDriver;
import com.exadel.ehitchhiking.Models.TripPass;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;

@Repository("TripPassIBasicDAO")
public class TripPassIBasicDAO extends AbstractDAO<TripPass> implements ITripPassDAO {

    public List<TripPass> getAll() {
        List<TripPass> trip_passes = (List<TripPass>)  getCurrentSession().createQuery("From com.exadel.ehitchhiking.Models.TripPass").list();
        return trip_passes;
    }

    public Passenger getPassenger(int id) {
        return getCurrentSession().get(Passenger.class, id);
    }

    public TripDriver getTrip(int id) {
        return getCurrentSession().get(TripDriver.class, id);
    }

    public TripPassIBasicDAO(){
        setAClass(TripPass.class);
    }
}
