package com.exadel.ehitchhiking.DAO.impl;

import com.exadel.ehitchhiking.DAO.IBasicDAO;
import com.exadel.ehitchhiking.DAO.IBlackListPassDAO;
import com.exadel.ehitchhiking.Models.BlacklistPass;
import com.exadel.ehitchhiking.Models.Driver;
import com.exadel.ehitchhiking.Models.Passenger;
import com.exadel.ehitchhiking.Utils.HibernateSessionFactoryUtil;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;


@Repository
public class BlackListPassIBasicDAO extends AbstractDAO<BlacklistPass> implements IBlackListPassDAO {

    public BlacklistPass get(int id) {
        return HibernateSessionFactoryUtil.getSessionFactory().openSession().get(BlacklistPass.class, id);
    }

    public List<BlacklistPass> getAll() {
        List<BlacklistPass> blacklist_passes = (List<BlacklistPass>)  HibernateSessionFactoryUtil.getSessionFactory().openSession().createQuery("From com.exadel.ehitchhiking.Models.BlacklistPass").list();
        return blacklist_passes;
    }

    public Driver getDriver(int id) {
        return HibernateSessionFactoryUtil.getSessionFactory().openSession().get(Driver.class, id);
    }

    public Passenger getPassenger(int id) {
        return HibernateSessionFactoryUtil.getSessionFactory().openSession().get(Passenger.class, id);
    }
}
