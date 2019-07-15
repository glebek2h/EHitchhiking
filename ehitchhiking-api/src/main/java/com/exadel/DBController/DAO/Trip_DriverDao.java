package com.exadel.DBController.DAO;

import com.exadel.DBController.Models.Driver;
import com.exadel.DBController.Models.Trip_Driver;
import com.exadel.DBController.Utils.HibernateSessionFactoryUtil;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.List;

public class Trip_DriverDao implements Dao<Trip_Driver> {
    public void save(Trip_Driver trip_driver) {
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Transaction tx1 = session.beginTransaction();
        session.save(trip_driver);
        tx1.commit();
        session.close();
    }

    public void update(Trip_Driver trip_driver) {
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Transaction tx1 = session.beginTransaction();
        session.update(trip_driver);
        tx1.commit();
        session.close();
    }

    public void delete(Trip_Driver trip_driver) {
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Transaction tx1 = session.beginTransaction();
        session.delete(trip_driver);
        tx1.commit();
        session.close();
    }

    public Trip_Driver get(long id) {
        return HibernateSessionFactoryUtil.getSessionFactory().openSession().get(Trip_Driver.class, id);
    }

    public List<Trip_Driver> getAll() {
        List<Trip_Driver> trips_drivers = (List<Trip_Driver>)  HibernateSessionFactoryUtil.getSessionFactory().openSession().createQuery("From com.exadel.DBController.Models.Trip_Driver").list();
        return trips_drivers;
    }
}
