package com.exadel.DBController.DAO;

import com.exadel.DBController.Models.Driver;
import com.exadel.DBController.Models.Trip_Pass;
import com.exadel.DBController.Utils.HibernateSessionFactoryUtil;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.List;

public class Trip_PassDao implements Dao<Trip_Pass> {
    public void save(Trip_Pass trip_pass) {
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Transaction tx1 = session.beginTransaction();
        session.save(trip_pass);
        tx1.commit();
        session.close();
    }

    public void update(Trip_Pass trip_pass) {
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Transaction tx1 = session.beginTransaction();
        session.update(trip_pass);
        tx1.commit();
        session.close();
    }

    public void delete(Trip_Pass trip_pass) {
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Transaction tx1 = session.beginTransaction();
        session.delete(trip_pass);
        tx1.commit();
        session.close();
    }

    public Trip_Pass get(long id) {
        return HibernateSessionFactoryUtil.getSessionFactory().openSession().get(Trip_Pass.class, id);
    }

    public List<Trip_Pass> getAll() {
        List<Trip_Pass> trip_passes = (List<Trip_Pass>)  HibernateSessionFactoryUtil.getSessionFactory().openSession().createQuery("From com.exadel.DBController.Models.Trip_Pass").list();
        return trip_passes;
    }
}
