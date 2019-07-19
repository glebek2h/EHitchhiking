package com.exadel.ehitchhiking.Services.impl;


import com.exadel.ehitchhiking.DAO.IBlackListDriverDAO;
import com.exadel.ehitchhiking.Services.IBlackListDriverService;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exadel.ehitchhiking.Models.BlacklistDriver;

import javax.transaction.Transactional;

@Service
@Transactional(rollbackOn = Exception.class)
@NoArgsConstructor
public class BlackListDriverService implements IBlackListDriverService {

    @Autowired
    private IBlackListDriverDAO dao;

    public void createBlackList(int userId){
        BlacklistDriver blacklistDriver = new BlacklistDriver();
        blacklistDriver.setDriver(dao.getDriver(userId));
        dao.save(blacklistDriver);
    }

    public void deleteBlackList(int userId){
        dao.delete(dao.get(userId));
    }

    public void addPass(int driverId, int passId){
        System.out.println("here");
        BlacklistDriver blacklistDriver = dao.get(driverId);
        blacklistDriver.getPassSet().add(dao.getPassenger(passId));
        dao.update(blacklistDriver);
    }

    public void deletePass(int driverId, int passId){
        BlacklistDriver blacklistDriver = dao.get(driverId);
        blacklistDriver.getPassSet().remove(dao.getPassenger(passId));
        dao.update(blacklistDriver);
    }
}

