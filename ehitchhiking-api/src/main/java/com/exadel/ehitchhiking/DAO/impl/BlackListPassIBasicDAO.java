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


    public List<BlacklistPass> getAll() {
        List<BlacklistPass> blacklist_passes = (List<BlacklistPass>)  getCurrentSession().createQuery("From com.exadel.ehitchhiking.Models.BlacklistPass").list();
        return blacklist_passes;
    }

    public Driver getDriver(int id) {
        return getCurrentSession().get(Driver.class, id);
    }

    public Passenger getPassenger(int id) {
        return getCurrentSession().get(Passenger.class, id);
    }

    public BlackListPassIBasicDAO(){
        setAClass(BlacklistPass.class);
    }

    public BlacklistPass getByPassId(int idPass){
        List<BlacklistPass> blacklistPass = (List<BlacklistPass>) getCurrentSession().createQuery("From com.exadel.ehitchhiking.Models.BlacklistPass where pass.id = '" + idPass + "'").list();
        return blacklistPass.get(0);
    }
}
