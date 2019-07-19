package com.exadel.ehitchhiking.Services;


import com.exadel.ehitchhiking.DAO.IBlackListDriverDAO;
import com.exadel.ehitchhiking.Models.Passenger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exadel.ehitchhiking.DAO.impl.BlackListDriverIBasicDAO;
import com.exadel.ehitchhiking.Models.BlacklistDriver;

import javax.transaction.Transactional;
import java.util.HashSet;
import java.util.Set;

@Service
@Transactional(rollbackOn = Exception.class)
public class BlackListDriverService {

    @Autowired
    private IBlackListDriverDAO dao = new BlackListDriverIBasicDAO();


    public void createBlackList(int userId){
        BlacklistDriver blacklist_driver = new BlacklistDriver();
        blacklist_driver.setDriver(dao.getDriver(userId));
        dao.save(blacklist_driver);
    }

    public void deleteBlackList(int userId){
        dao.delete(dao.get(userId));
    }

    public void addPass(int driverId, int passId){
        System.out.println("here");
        BlacklistDriver blacklist_driver = dao.get(driverId);
        blacklist_driver.getPassSet().add(dao.getPassenger(passId));
        dao.update(blacklist_driver);
    }


    public void deletePass(int driverId, int passId){
        BlacklistDriver blacklist_driver = dao.get(driverId);
        blacklist_driver.getPassSet().remove(dao.getPassenger(passId));
        dao.update(blacklist_driver);
    }

   // public Set<Passenger> findAllPass(int driverId){
  //      return dao.getByDriverId(driverId).getPassSet();
  //  }
}

