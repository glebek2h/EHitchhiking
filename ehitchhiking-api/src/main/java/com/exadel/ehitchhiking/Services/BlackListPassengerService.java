package com.exadel.ehitchhiking.Services;
import com.exadel.ehitchhiking.DAO.IBlackListPassDAO;
import com.exadel.ehitchhiking.Models.BlacklistPass;
import com.exadel.ehitchhiking.Models.Driver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exadel.ehitchhiking.DAO.impl.BlackListPassIBasicDAO;

import javax.transaction.Transactional;
import java.util.Set;

@Service
@Transactional(rollbackOn = Exception.class)
public class BlackListPassengerService {

    @Autowired
    private IBlackListPassDAO dao = new BlackListPassIBasicDAO();


    public void createBlackList(int userId){
        BlacklistPass blacklist_pass = new BlacklistPass();
        blacklist_pass.setPass(dao.getPassenger(userId));
        dao.save(blacklist_pass);
    }

    public void deleteBlackList(int userId){
        dao.delete(dao.get(userId));
    }

    public void addPass(int passId, int driverId){
        BlacklistPass blacklist_pass = dao.get(passId);
        blacklist_pass.getDriverSet().add(dao.getDriver(driverId));
        dao.update(blacklist_pass);
    }

/*
    public void addPass(String passUsername, String driverUsername){
        addPass();
    }*/

    public void deletePass(int passId, int driverId){
        BlacklistPass blacklist_pass = dao.get(passId);
        blacklist_pass.getDriverSet().remove(dao.getDriver(driverId));
        dao.update(blacklist_pass);
    }


//    public Set<Driver> findAllDrivers(int passId){
//
//        return dao.getByPassId(passId).getDriverSet();
//    }
}
