package com.exadel.ehitchhiking.Services.impl;

import com.exadel.ehitchhiking.DAO.IDriverDAO;
import com.exadel.ehitchhiking.DAO.impl.DriverIBasicDAO;

import com.exadel.ehitchhiking.Models.Driver;

import com.exadel.ehitchhiking.Models.Employee;
import com.exadel.ehitchhiking.Services.IDriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional(rollbackOn = Exception.class)
public class DriverService implements IDriverService {

    @Autowired
    private IDriverDAO dao;

    public void createDriver(Employee employee) {
        dao.save(new Driver(employee, 0.0f, 0));
    }

    public int findDriverIdByUsername(String username) {
        return dao.getByName(username).getId();
    }

    public void updateRateDriver(String username, float addedRate) {
        Driver driver = dao.getByName(username);
        int oldPeople = driver.getRatedPeoples();
        driver.setRate(((driver.getRate() * oldPeople) + addedRate) / (oldPeople + 1));
        driver.setRatedPeoples(oldPeople + 1);
        dao.update(driver);
    }

    public void deleteDriver(String username) {
        dao.delete(dao.getByName(username));
    }

    public void deleteDriverId(int id) {
        dao.delete(dao.get(id));
    }
}