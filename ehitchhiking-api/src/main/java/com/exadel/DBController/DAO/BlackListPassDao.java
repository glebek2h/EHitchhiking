package com.exadel.DBController.DAO;

import com.exadel.DBController.Models.Blacklist_Pass;
import com.exadel.DBController.Utils.HibernateSessionFactoryUtil;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.List;

public class BlackListPassDao implements Dao<Blacklist_Pass> {
    public void save(Blacklist_Pass blacklist_pass) {
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Transaction tx1 = session.beginTransaction();
        session.save(blacklist_pass);
        tx1.commit();
        session.close();
    }

    public void update(Blacklist_Pass blacklist_pass) {
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Transaction tx1 = session.beginTransaction();
        session.update(blacklist_pass);
        tx1.commit();
        session.close();
    }

    public void delete(Blacklist_Pass blacklist_pass) {
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Transaction tx1 = session.beginTransaction();
        session.delete(blacklist_pass);
        tx1.commit();
        session.close();
    }

    public Blacklist_Pass get(int id) {
        return HibernateSessionFactoryUtil.getSessionFactory().openSession().get(Blacklist_Pass.class, id);
    }

    public List<Blacklist_Pass> getAll() {
        List<Blacklist_Pass> blacklist_passes = (List<Blacklist_Pass>)  HibernateSessionFactoryUtil.getSessionFactory().openSession().createQuery("From com.exadel.DBController.Models.Blacklist_Pass").list();
        return blacklist_passes;
    }
}
