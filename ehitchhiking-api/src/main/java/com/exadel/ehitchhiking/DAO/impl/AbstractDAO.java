package com.exadel.ehitchhiking.DAO.impl;

import com.exadel.ehitchhiking.DAO.IBasicDAO;
import com.exadel.ehitchhiking.Utils.HibernateSessionFactoryUtil;
import lombok.Setter;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;


public abstract class AbstractDAO<T> /*extends*/ implements IBasicDAO<T>  {

     @Setter
     public Class<T> aClass;

     @PersistenceContext
     EntityManager entityManager;

     protected Session getCurrentSession(){
         return entityManager.unwrap(Session.class);
     }


     public void save(T t) {
        Session session = getCurrentSession();
        Transaction tx1 = session.beginTransaction();
        session.save(t);
        tx1.commit();
        session.close();
    }

     public void update(T t) {
        Session session = getCurrentSession();
        Transaction tx1 = session.beginTransaction();
        session.update(t);
        tx1.commit();
        session.close();
    }

     public void delete(T t) {
        Session session = getCurrentSession();
        Transaction tx1 = session.beginTransaction();
        session.delete(t);
        tx1.commit();
        session.close();
    }

    public T get(int id) {
        return getCurrentSession().get(aClass, id);
    }

}
