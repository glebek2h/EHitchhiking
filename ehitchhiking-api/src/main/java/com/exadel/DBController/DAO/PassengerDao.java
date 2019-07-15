package com.exadel.DBController.DAO;

import com.exadel.DBController.Models.Driver;
import com.exadel.DBController.Models.Passenger;
import com.exadel.DBController.Utils.HibernateSessionFactoryUtil;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.List;

public class PassengerDao implements Dao<Passenger> {
    public void save(Passenger pass) {
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Transaction tx1 = session.beginTransaction();
        session.save(pass);
        tx1.commit();
        session.close();
    }

    public void update(Passenger pass) {
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Transaction tx1 = session.beginTransaction();
        session.update(pass);
        tx1.commit();
        session.close();
    }

    public void delete(Passenger pass) {
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Transaction tx1 = session.beginTransaction();
        session.delete(pass);
        tx1.commit();
        session.close();
    }

    public Passenger get(long id) {
        return HibernateSessionFactoryUtil.getSessionFactory().openSession().get(Passenger.class, id);
    }

    public List<Passenger> getAll() {
        List<Passenger> passs = (List<Passenger>)  HibernateSessionFactoryUtil.getSessionFactory().openSession().createQuery("From com.exadel.DBController.Models.Passenger").list();
        return passs;
    }
}
