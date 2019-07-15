package com.exadel.DBController.DAO;


import com.exadel.DBController.Models.Driver;
import com.exadel.DBController.Utils.HibernateSessionFactoryUtil;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.List;

public class DriverDao implements Dao<Driver> {

    public void save(Driver driver) {
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Transaction tx1 = session.beginTransaction();
        session.save(driver);
        tx1.commit();
        session.close();
    }

    public void update(Driver driver) {
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Transaction tx1 = session.beginTransaction();
        session.update(driver);
        tx1.commit();
        session.close();
    }

    public void delete(Driver driver) {
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Transaction tx1 = session.beginTransaction();
        session.delete(driver);
        tx1.commit();
        session.close();
    }

    public Driver get(long id) {
        return HibernateSessionFactoryUtil.getSessionFactory().openSession().get(Driver.class, id);
    }

    public List<Driver> getAll() {
        List<Driver> drivers = (List<Driver>)  HibernateSessionFactoryUtil.getSessionFactory().openSession().createQuery("From com.exadel.DBController.Models.Driver").list();
        return drivers;
    }
}
