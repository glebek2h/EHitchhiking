package com.exadel.ehitchhiking.DAO.impl;

import com.exadel.ehitchhiking.DAO.IBasicDAO;
import com.exadel.ehitchhiking.DAO.IBlackListDriverDAO;
import com.exadel.ehitchhiking.Models.BlacklistDriver;
import com.exadel.ehitchhiking.Models.Driver;
import com.exadel.ehitchhiking.Models.Passenger;
import com.exadel.ehitchhiking.Utils.HibernateSessionFactoryUtil;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;

@Repository
public class BlackListDriverIBasicDAO extends AbstractDAO<BlacklistDriver> implements IBlackListDriverDAO {


    public BlacklistDriver get(int id) {
        return HibernateSessionFactoryUtil.getSessionFactory().openSession().get(BlacklistDriver.class, id);
    }

    public List<BlacklistDriver> getAll() {
        List<BlacklistDriver> blacklist_drivers = (List<BlacklistDriver>)  HibernateSessionFactoryUtil.getSessionFactory().openSession().createQuery("From com.exadel.ehitchhiking.Models.BlacklistDriver").list();
        return blacklist_drivers;
    }

    public Driver getDriver(int id) {
        return HibernateSessionFactoryUtil.getSessionFactory().openSession().get(Driver.class, id);
    }

    public Passenger getPassenger(int id) {
        return HibernateSessionFactoryUtil.getSessionFactory().openSession().get(Passenger.class, id);
    }


}
