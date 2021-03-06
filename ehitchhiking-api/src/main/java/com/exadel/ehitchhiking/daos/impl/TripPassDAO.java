package com.exadel.ehitchhiking.daos.impl;

import com.exadel.ehitchhiking.daos.ITripPassDAO;
import com.exadel.ehitchhiking.models.TripPass;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TripPassDAO extends AbstractDAO<TripPass> implements ITripPassDAO {

    public TripPassDAO() {
        super(TripPass.class);
    }


    @Override
    public TripPass getTripPass(int id) {
        return getCurrentSession().get(TripPass.class, id);
    }


    @Override
    public int getAmountPass(int idTripDriver) {
        return getCurrentSession().createQuery("from TripPass where tripDriver.id = '" + idTripDriver + "' and isActive = true").list().size();
    }

    @Override
    public List<TripPass> getAllPass(int idTrip){
        return (List<TripPass>) getCurrentSession().createQuery("from TripPass where tripDriver.id = '" + idTrip + "' and isActive = true").list();
    }


    @Override
    public List<TripPass> getHistory(int empId){
        return (List<TripPass>) getCurrentSession().createQuery("from TripPass where passenger.employee.id = '" + empId + "' and isHistory = true and isActive = false").list();
    }

    @Override
    public List<TripPass> getActive(int empId){
        return (List<TripPass>) getCurrentSession().createQuery("from TripPass where passenger.employee.id = '" + empId + "' and isActive = true ").list();
    }
}
