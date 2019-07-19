package com.exadel.ehitchhiking.DAO.impl;

import com.exadel.ehitchhiking.DAO.IBasicDAO;
import lombok.Setter;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


@Repository("AbstractDAO")
public abstract class AbstractDAO<T> implements IBasicDAO<T>  {

     @Setter
     public Class<T> aClass;

     @Autowired
     private SessionFactory sessionFactory;

     protected Session getCurrentSession(){
         return sessionFactory.getCurrentSession();
     }


     public void save(T t) {
        Session session = getCurrentSession();
        session.save(t);
    }

     public void update(T t) {
        Session session = getCurrentSession();
        session.update(t);
    }

     public void delete(T t) {
        Session session = getCurrentSession();
        session.delete(t);
    }

    public T get(int id) {
        return getCurrentSession().get(aClass, id);
    }


}
