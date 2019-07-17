package com.exadel.ehitchhiking.Services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exadel.ehitchhiking.DAO.impl.BlackListDriverIBasicDAO;
import com.exadel.ehitchhiking.Models.BlacklistDriver;

@Service
public class BlackListDriverService {

    @Autowired
    BlackListDriverIBasicDAO dao = new BlackListDriverIBasicDAO();


    public void createBlackList(int userId){
        BlacklistDriver blacklist_driver = new BlacklistDriver();
        blacklist_driver.setDriver(dao.getDriver(userId));
        dao.save(blacklist_driver);
    }

    public void deleteBlackList(int userId){
        dao.delete(dao.get(userId));
    }

//    public void addPass(int driverId, int passId){
//        BlacklistDriver blacklist_driver = dao.get(driverId);
//        blacklist_driver.getPass_set().add(dao.getPassenger(passId));
//        dao.update(blacklist_driver);
//    }
//
//
//    public void deletePass(int driverId, int passId){
//        BlacklistDriver blacklist_driver = dao.get(driverId);
//        blacklist_driver.getPass_set().remove(dao.getPassenger(passId));
//        dao.update(blacklist_driver);
//    }
}

