package com.exadel.ehitchhiking.services.impl;

import com.exadel.ehitchhiking.daos.IDriverDAO;

import com.exadel.ehitchhiking.daos.IPassengerDAO;
import com.exadel.ehitchhiking.models.Driver;

import com.exadel.ehitchhiking.models.Employee;
import com.exadel.ehitchhiking.models.Passenger;
import com.exadel.ehitchhiking.services.IDriverService;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional(rollbackOn = Exception.class)
@NoArgsConstructor
public class DriverService implements IDriverService {

    @Autowired
    private IDriverDAO dao;

    @Autowired
    private IPassengerDAO passengerDAO;

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

    @Override
    public void addPassToBL(int idDriver, int idPass) {
        Driver driver = dao.getDriver(idDriver);
        driver.getPassengers().add(passengerDAO.getPassenger(idPass));
        dao.saveOrUpdate(driver);
    }

    @Override
    public void deletePassFromBL(int idDriver, int idPass) {
        Driver driver = dao.getDriver(idDriver);
        driver.getPassengers().remove(passengerDAO.getPassenger(idPass));
        dao.saveOrUpdate(driver);
    }

    @Override
    public List<Passenger> getPassengers(int idDriver) {
        return dao.getDriver(idDriver).getPassengers();
    }
}