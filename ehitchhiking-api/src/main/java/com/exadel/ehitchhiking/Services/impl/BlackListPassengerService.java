package com.exadel.ehitchhiking.Services.impl;
import com.exadel.ehitchhiking.DAO.IBlackListPassDAO;
import com.exadel.ehitchhiking.DAO.IDriverDAO;
import com.exadel.ehitchhiking.DAO.IPassengerDAO;
import com.exadel.ehitchhiking.Models.BlacklistPass;
import com.exadel.ehitchhiking.Models.Driver;
import com.exadel.ehitchhiking.Models.Passenger;
import com.exadel.ehitchhiking.Services.IBlackListPassengerService;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional(rollbackOn = Exception.class)
@NoArgsConstructor
public class BlackListPassengerService implements IBlackListPassengerService {

    @Autowired
    private IBlackListPassDAO dao;

    @Autowired
    private IPassengerDAO passengerDAO;

    @Autowired
    private IDriverDAO driverDAO;

    @Override
    public void createBlackList(int userId){
        BlacklistPass blacklist_pass = new BlacklistPass();
        blacklist_pass.setPassenger(passengerDAO.getPassenger(userId));
        dao.save(blacklist_pass);
    }

    @Override
    public void deleteBlackList(int userId){
        dao.delete(dao.getByPassId(userId));
    }

    @Override
    public void addPass(int passId, int driverId){
        BlacklistPass blacklistPass = dao.getByPassId(passId);
        if (blacklistPass == null){
            Passenger passenger = passengerDAO.getPassenger(passId);
            blacklistPass = new BlacklistPass(passenger);
        }
        blacklistPass.getDriverList().add(driverDAO.getDriver(driverId));
        dao.saveOrUpdate(blacklistPass);
    }

    @Override
    public void deletePass(int passId, int driverId){
        BlacklistPass blacklistPass = dao.getByPassId(passId);
        blacklistPass.getDriverList().remove(driverDAO.getDriver(driverId));
        dao.update(blacklistPass);
    }

    @Override
    public List<Driver> getAll(int passId) {
        return dao.getByPassId(passId).getDriverList();
    }

    @Override
    public BlacklistPass getBlacklist(int passId){
        return dao.getByPassId(passId);
    }
}
