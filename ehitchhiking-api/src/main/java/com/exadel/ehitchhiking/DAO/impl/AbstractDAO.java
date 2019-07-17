package com.exadel.ehitchhiking.DAO.impl;

import com.exadel.ehitchhiking.DAO.IBasicDAO;
import com.exadel.ehitchhiking.Utils.HibernateSessionFactoryUtil;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.List;

public abstract class AbstractDAO<T> implements IBasicDAO<T> {

    private Class<T> tClass;


     public void save(T t) {
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Transaction tx1 = session.beginTransaction();
        session.save(t);
        tx1.commit();
        session.close();
    }

     public void update(T t) {
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Transaction tx1 = session.beginTransaction();
        session.update(t);
        tx1.commit();
        session.close();
    }

     public void delete(T t) {
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Transaction tx1 = session.beginTransaction();
        session.delete(t);
        tx1.commit();
        session.close();
    }

    public T get(int id) {
        return HibernateSessionFactoryUtil.getSessionFactory().openSession().get(tClass, id);
    }

}
