package com.exadel.ehitchhiking.daos.impl;

import com.exadel.ehitchhiking.daos.IBasicDAO;
import lombok.NoArgsConstructor;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

public abstract class AbstractDAO<T> implements IBasicDAO<T> {

    protected final Class<T> persistanceType;

    @Autowired
    private SessionFactory sessionFactory;

    public AbstractDAO(Class<T> persistanceType) {
        this.persistanceType = persistanceType;
    }

    protected Session getCurrentSession() {
        return sessionFactory.getCurrentSession();
    }

    public void save(T t) {
        Session session = getCurrentSession();
        session.save(t);
    }

    @Override
    public void saveOrUpdate(T t) {
        Session session = getCurrentSession();
        session.saveOrUpdate(t);
    }

    public void update(T t) {
        Session session = getCurrentSession();
        session.update(t);
    }

    public void delete(T t) {
        Session session = getCurrentSession();
        session.delete(t);
    }

    public List<T> getAll() {
        return getCurrentSession().createQuery("from " + persistanceType.getName(), persistanceType).list();
    }
}
