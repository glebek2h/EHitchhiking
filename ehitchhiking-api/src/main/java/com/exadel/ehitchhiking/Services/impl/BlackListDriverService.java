package com.exadel.ehitchhiking.Services.impl;


import com.exadel.ehitchhiking.DAO.IBlackListDriverDAO;
import com.exadel.ehitchhiking.DAO.IDriverDAO;
import com.exadel.ehitchhiking.DAO.IPassengerDAO;
import com.exadel.ehitchhiking.Models.Driver;
import com.exadel.ehitchhiking.Services.IBlackListDriverService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.hibernate.service.spi.InjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import com.exadel.ehitchhiking.Models.BlacklistDriver;

import javax.transaction.Transactional;

@Service
@Transactional(rollbackOn = Exception.class)
@NoArgsConstructor
public class BlackListDriverService implements IBlackListDriverService {

    @Autowired
    private IBlackListDriverDAO dao;

    @Autowired
    private IPassengerDAO passengerDAO;

    @Autowired
    private IDriverDAO driverDAO;

    @Override
    public void createBlackList(int userId){
        BlacklistDriver blacklistDriver = new BlacklistDriver();
        blacklistDriver.setDriver(driverDAO.getDriver(userId));
        dao.save(blacklistDriver);
    }

    @Override
    public void deleteBlackList(int userId){
        dao.delete(dao.getBlackList(userId));
    }

    @Override
    public void addPass(int driverId, int passId){
        BlacklistDriver blacklistDriver = dao.getByDriverId(driverId);
        if (blacklistDriver == null) {
            //TODO driver dao
            Driver driver = driverDAO.getDriver(driverId);
            //if (driver == null) throw ;
            blacklistDriver = new BlacklistDriver(driver);
        }
        blacklistDriver.getPassList().add(passengerDAO.getPassenger(passId));
        dao.saveOrUpdate(blacklistDriver);
    }

    @Override
    public void deletePass(int driverId, int passId){
        BlacklistDriver blacklistDriver = dao.getByDriverId(driverId);
        blacklistDriver.getPassList().remove(passengerDAO.getPassenger(passId));
        dao.update(blacklistDriver);
    }
}