package com.exadel.ehitchhiking.Services;
import com.exadel.ehitchhiking.Models.BlacklistPass;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exadel.ehitchhiking.DAO.impl.BlackListPassIBasicDAO;

@Service
public class BlackListPassengerService {

    @Autowired
    BlackListPassIBasicDAO dao = new BlackListPassIBasicDAO();


    public void CreateBlackList(int userId){
        BlacklistPass blacklist_pass = new BlacklistPass();
        blacklist_pass.setPass(dao.getPassenger(userId));
        dao.save(blacklist_pass);
    }

    public void deleteBlackList(int userId){
        dao.delete(dao.get(userId));
    }

//    public void addPass(int passId, int driverId){
//        BlacklistPass blacklist_pass = dao.get(passId);
//        blacklist_pass.getDriver_set().add(dao.getDriver(driverId));
//        dao.update(blacklist_pass);
//    }
//
//
//
//    public void deletePass(int passId, int driverId){
//        BlacklistPass blacklist_pass = dao.get(passId);
//        blacklist_pass.getDriver_set().remove(dao.getDriver(driverId));
//        dao.update(blacklist_pass);
//    }
}
