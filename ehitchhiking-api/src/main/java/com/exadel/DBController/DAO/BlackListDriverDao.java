package com.exadel.DBController.DAO;

import com.exadel.DBController.Models.Blacklist_Driver;
import com.exadel.DBController.Models.Driver;
import com.exadel.DBController.Utils.HibernateSessionFactoryUtil;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.List;

public class BlackListDriverDao implements Dao<Blacklist_Driver> {
    public void save(Blacklist_Driver blacklist_driver) {
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Transaction tx1 = session.beginTransaction();
        session.save(blacklist_driver);
        tx1.commit();
        session.close();
    }

    public void update(Blacklist_Driver blacklist_driver) {
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Transaction tx1 = session.beginTransaction();
        session.update(blacklist_driver);
        tx1.commit();
        session.close();
    }

    public void delete(Blacklist_Driver blacklist_driver) {
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Transaction tx1 = session.beginTransaction();
        session.delete(blacklist_driver);
        tx1.commit();
        session.close();
    }

    public Blacklist_Driver get(long id) {
        return HibernateSessionFactoryUtil.getSessionFactory().openSession().get(Blacklist_Driver.class, id);
    }

    public List<Blacklist_Driver> getAll() {
        List<Blacklist_Driver> blacklist_drivers = (List<Blacklist_Driver>)  HibernateSessionFactoryUtil.getSessionFactory().openSession().createQuery("From com.exadel.DBController.Models.Blacklist_Driver").list();
        return blacklist_drivers;
    }
}
