package com.exadel.ehitchhiking.Services.impl;

import com.exadel.ehitchhiking.DAO.IDriverDAO;
import com.exadel.ehitchhiking.DAO.IPassengerDAO;
import com.exadel.ehitchhiking.Models.Driver;
import com.exadel.ehitchhiking.Models.Employee;
import com.exadel.ehitchhiking.Models.Passenger;
import com.exadel.ehitchhiking.Services.IPassengerService;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional(rollbackOn = Exception.class)
@NoArgsConstructor
public class PassengerService implements IPassengerService {


    @Autowired
    private IPassengerDAO dao;

    @Autowired
    private IDriverDAO driverDAO;

    @Override
    public void createPassenger(Employee employee) {
       dao.save(new Passenger(employee, 0.0f, 0));
    }

    @Override
    public int findPassIdByUsername(String username){
        return dao.getByName(username).getId();
    }

    @Override
    public void updateRatePass(String username, float addedRate) {
        Passenger passenger = dao.getByName(username);
        int amount = passenger.getRatedPeoples();
        passenger.setRate(((passenger.getRate() * amount) + addedRate) / (amount + 1));
        passenger.setRatedPeoples(amount + 1);
        dao.update(passenger);
    }

    @Override
    public void deletePassenger(String username) {
        dao.delete(dao.getByName(username));
    }

    @Override
    public void deletePassengerId(int id) {
        dao.delete(dao.getPassenger(id));
    }

    @Override
    public void addDriverToBL(int idPass, int idDriver) {
        Passenger passenger = dao.getPassenger(idPass);
        passenger.getDrivers().add(driverDAO.getDriver(idDriver));
        dao.saveOrUpdate(passenger);
    }

    @Override
    public void deleteDriverToBL(int idPass, int idDriver) {
        Passenger passenger = dao.getPassenger(idPass);
        passenger.getDrivers().remove(driverDAO.getDriver(idDriver));
        dao.saveOrUpdate(passenger);
    }

    @Override
    public List<Driver> getDrivers(int idPass) {
        return dao.getPassenger(idPass).getDrivers();
    }
}
