package com.exadel.ehitchhiking.daos.impl;

import com.exadel.ehitchhiking.daos.ITripPassDAO;
import com.exadel.ehitchhiking.models.TripPass;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TripPassDAO extends AbstractDAO<TripPass> implements ITripPassDAO {

    public TripPassDAO(SessionFactory sessionFactory) {
        super(sessionFactory);
    }

    @Override
    public List<TripPass> getAll() {
        List<TripPass> trip_passes = (List<TripPass>)  getCurrentSession().createQuery("From com.exadel.ehitchhiking.models.TripPass").list();
        return trip_passes;
    }

    @Override
    public TripPass getTripPass(int id) {
        return getCurrentSession().get(TripPass.class, id);
    }
}
