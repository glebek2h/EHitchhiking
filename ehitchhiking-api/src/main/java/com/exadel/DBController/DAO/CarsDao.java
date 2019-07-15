package com.exadel.DBController.DAO;

import com.exadel.DBController.Models.Cars;
import com.exadel.DBController.Utils.HibernateSessionFactoryUtil;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.List;

public class CarsDao implements Dao<Cars>{
    public void save(Cars car) {
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Transaction tx1 = session.beginTransaction();
        session.save(car);
        tx1.commit();
        session.close();
    }

    public void update(Cars car) {
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Transaction tx1 = session.beginTransaction();
        session.update(car);
        tx1.commit();
        session.close();
    }

    public void delete(Cars car) {
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Transaction tx1 = session.beginTransaction();
        session.delete(car);
        tx1.commit();
        session.close();
    }

    public Cars get(int id) {
        return HibernateSessionFactoryUtil.getSessionFactory().openSession().get(Cars.class, id);
    }

    public List<Cars> getAll() {
        List<Cars> cars = (List<Cars>)  HibernateSessionFactoryUtil.getSessionFactory().openSession().createQuery("From com.exadel.DBController.Models.Cars").list();
        return cars;
    }
}
