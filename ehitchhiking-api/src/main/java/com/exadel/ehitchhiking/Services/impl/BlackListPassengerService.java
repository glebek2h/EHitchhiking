package com.exadel.ehitchhiking.Services.impl;
import com.exadel.ehitchhiking.DAO.IBlackListPassDAO;
import com.exadel.ehitchhiking.Models.BlacklistPass;
import com.exadel.ehitchhiking.Services.IBlackListPassengerService;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional(rollbackOn = Exception.class)
@NoArgsConstructor
public class BlackListPassengerService implements IBlackListPassengerService {

    @Autowired
    private IBlackListPassDAO dao;

    public void createBlackList(int userId){
        BlacklistPass blacklist_pass = new BlacklistPass();
        blacklist_pass.setPassenger(dao.getPassenger(userId));
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

    public void deletePass(int passId, int driverId){
        BlacklistPass blacklist_pass = dao.get(passId);
        blacklist_pass.getDriverSet().remove(dao.getDriver(driverId));
        dao.update(blacklist_pass);
    }

}
