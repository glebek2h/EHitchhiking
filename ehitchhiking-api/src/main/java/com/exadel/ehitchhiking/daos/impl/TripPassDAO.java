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

//    @Override
//    public List<TripPass> getAll() {
//        return (List<TripPass>)  getCurrentSession().createQuery("from TripPass").list();
//    }

    @Override
    public TripPass getTripPass(int id) {
        return getCurrentSession().get(TripPass.class, id);
    }

    @Override
    public int getAmountPass(int idTripDriver) {
        return getCurrentSession().createQuery("from TripPass where tripDriver.id = \"" + idTripDriver + "\"").list().size();
    }
}
