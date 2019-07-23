package com.exadel.ehitchhiking.Services.impl;

import com.exadel.ehitchhiking.DAO.IDriverDAO;

import com.exadel.ehitchhiking.Models.Driver;

import com.exadel.ehitchhiking.Models.Employee;
import com.exadel.ehitchhiking.Services.IDriverService;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional(rollbackOn = Exception.class)
@NoArgsConstructor
public class DriverService implements IDriverService {

    @Autowired
    private IDriverDAO dao;

    @Override
    public void createDriver(Employee employee) {
        dao.save(new Driver(employee, 0.0f, 0));
    }

    @Override
    public int findDriverIdByUsername(String username) {
        return dao.getByName(username).getId();
    }

    @Override
    public void updateRateDriver(String username, float addedRate) {
        Driver driver = dao.getByName(username);
        int oldPeople = driver.getRatedPeoples();
        driver.setRate(((driver.getRate() * oldPeople) + addedRate) / (oldPeople + 1));
        driver.setRatedPeoples(oldPeople + 1);
        dao.update(driver);
    }

    @Override
    public void deleteDriver(String username) {
        dao.delete(dao.getByName(username));
    }

    @Override
    public void deleteDriverId(int id) {
        dao.delete(dao.getDriver(id));
    }
}