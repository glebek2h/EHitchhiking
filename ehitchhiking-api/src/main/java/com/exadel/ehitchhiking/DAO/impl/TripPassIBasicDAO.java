package com.exadel.ehitchhiking.DAO.impl;

import com.exadel.ehitchhiking.DAO.IBasicDAO;
import com.exadel.ehitchhiking.DAO.ITripPassDAO;
import com.exadel.ehitchhiking.Models.Passenger;
import com.exadel.ehitchhiking.Models.TripDriver;
import com.exadel.ehitchhiking.Models.TripPass;
import com.exadel.ehitchhiking.Utils.HibernateSessionFactoryUtil;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;

@Repository
public class TripPassIBasicDAO extends AbstractDAO<TripPass> implements ITripPassDAO {

    public TripPass get(int id) {
        return HibernateSessionFactoryUtil.getSessionFactory().openSession().get(TripPass.class, id);
    }

    public List<TripPass> getAll() {
        List<TripPass> trip_passes = (List<TripPass>)  HibernateSessionFactoryUtil.getSessionFactory().openSession().createQuery("From com.exadel.ehitchhiking.Models.TripPass").list();
        return trip_passes;
    }


    public Passenger getPassenger(int id) {
        return HibernateSessionFactoryUtil.getSessionFactory().openSession().get(Passenger.class, id);
    }

    public TripDriver getTrip(int id) {
        return HibernateSessionFactoryUtil.getSessionFactory().openSession().get(TripDriver.class, id);
    }
}
