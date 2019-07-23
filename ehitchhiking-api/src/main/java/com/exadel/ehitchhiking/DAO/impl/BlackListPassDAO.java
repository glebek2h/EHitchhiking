package com.exadel.ehitchhiking.DAO.impl;

import com.exadel.ehitchhiking.DAO.IBasicDAO;
import com.exadel.ehitchhiking.DAO.IBlackListPassDAO;
import com.exadel.ehitchhiking.Models.BlacklistPass;
import com.exadel.ehitchhiking.Models.Driver;
import com.exadel.ehitchhiking.Models.Passenger;

import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;


@Repository
public class BlackListPassDAO extends AbstractDAO<BlacklistPass> implements IBlackListPassDAO {


    public BlackListPassDAO(SessionFactory sessionFactory) {
        super(sessionFactory);
    }

    @Override
    public List<BlacklistPass> getAll() {
        List<BlacklistPass> blacklistPasses = (List<BlacklistPass>)  getCurrentSession().createQuery("From com.exadel.ehitchhiking.Models.BlacklistPass").list();
        return blacklistPasses;
    }

    @Override
    public BlacklistPass getBlacklistPass(int id) {
        return getCurrentSession().get(BlacklistPass.class, id);
    }

    @Override
    public BlacklistPass getByPassId(int idPass){
        BlacklistPass blacklistPass = (BlacklistPass) getCurrentSession().createQuery("From com.exadel.ehitchhiking.Models.BlacklistPass where passenger.id = '" + idPass + "'").uniqueResult();
        return blacklistPass;
    }
}
