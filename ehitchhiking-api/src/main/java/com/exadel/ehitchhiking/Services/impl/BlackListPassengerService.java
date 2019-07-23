//package com.exadel.ehitchhiking.Services.impl;
//import com.exadel.ehitchhiking.DAO.IBlackListPassDAO;
//import com.exadel.ehitchhiking.DAO.IDriverDAO;
//import com.exadel.ehitchhiking.DAO.IPassengerDAO;
//import com.exadel.ehitchhiking.Models.BlacklistPass;
//import com.exadel.ehitchhiking.Models.Driver;
//import com.exadel.ehitchhiking.Models.Passenger;
//import com.exadel.ehitchhiking.Services.IBlackListPassengerService;
//import lombok.NoArgsConstructor;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import javax.transaction.Transactional;
//import java.util.List;
//
//@Service
//@Transactional(rollbackOn = Exception.class)
//@NoArgsConstructor
//public class BlackListPassengerService implements IBlackListPassengerService {
//
//    @Autowired
//    private IBlackListPassDAO dao;
//
//    @Autowired
//    private IPassengerDAO passengerDAO;
//
//    @Autowired
//    private IDriverDAO driverDAO;
//
//    @Override
//    public void createBlackList(int userId){
//        BlacklistPass blacklistPass = new BlacklistPass();
//        blacklistPass.setPassenger(passengerDAO.getPassenger(userId));
//        dao.save(blacklistPass);
//    }
//
//    @Override
//    public void deleteBlackList(int blpId){
//        dao.delete(dao.getBlacklist(blpId));
//    }
//
//    @Override
//    public void addPass(int passId, int driverId){
//        BlacklistPass blacklistPass = new BlacklistPass(passengerDAO.getPassenger(passId));
//        blacklistPass.getDrivers().add(driverDAO.getDriver(driverId));
//        blacklistPass.setDriverId(driverId);
//        dao.save(blacklistPass);
//    }
//
//    @Override
//    public void deletePass(int passId, int driverId){
//        dao.delete(dao.getBlackList(passId, driverId));
//    }
//
//}
