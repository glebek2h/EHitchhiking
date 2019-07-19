package com.exadel.ehitchhiking.DAO.impl;

import com.exadel.ehitchhiking.DAO.IBasicDAO;
import com.exadel.ehitchhiking.DAO.IBlackListDriverDAO;
import com.exadel.ehitchhiking.Models.BlacklistDriver;
import com.exadel.ehitchhiking.Models.Driver;
import com.exadel.ehitchhiking.Models.Passenger;

import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;

@Repository("BlackListDriverIBasicDAO")
public class BlackListDriverIBasicDAO extends AbstractDAO<BlacklistDriver> implements IBlackListDriverDAO {

    public List<BlacklistDriver> getAll() {
        List<BlacklistDriver> blacklist_drivers = (List<BlacklistDriver>)  getCurrentSession().createQuery("From com.exadel.ehitchhiking.Models.BlacklistDriver").list();
        return blacklist_drivers;
    }

    public Driver getDriver(int id) {
        return getCurrentSession().get(Driver.class, id);
    }

    public Passenger getPassenger(int id) {
        return getCurrentSession().get(Passenger.class, id);
    }

    public BlackListDriverIBasicDAO(){
        setAClass(BlacklistDriver.class);
    }

    public BlacklistDriver getByDriverId(int idDriver){
        List<BlacklistDriver> blacklistDriver = (List<BlacklistDriver>) getCurrentSession().createQuery("From com.exadel.ehitchhiking.Models.BlacklistDriver where driver.id = '" + idDriver + "'").list();
        return blacklistDriver.get(0);
    }
}
