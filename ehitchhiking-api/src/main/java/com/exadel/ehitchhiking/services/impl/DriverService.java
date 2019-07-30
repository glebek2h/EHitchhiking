package com.exadel.ehitchhiking.services.impl;

import com.exadel.ehitchhiking.daos.IDriverDAO;

import com.exadel.ehitchhiking.daos.IEmployeeDAO;
import com.exadel.ehitchhiking.daos.IPassengerDAO;
import com.exadel.ehitchhiking.models.Driver;

import com.exadel.ehitchhiking.models.vo.PassengerVO;
import com.exadel.ehitchhiking.services.IDriverService;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional(rollbackOn = Exception.class)
@NoArgsConstructor
public class DriverService implements IDriverService {

    @Autowired
    private IDriverDAO dao;

    @Autowired
    private IPassengerDAO passengerDAO;

    @Autowired
    private IEmployeeDAO employeeDAO;

    @Override
    public void createDriver(Integer id) {
        dao.save(new Driver(employeeDAO.getEmployee(id), 0.0f, 0));
    }

    @Override
    public int findDriverIdByEmail(String email) {
        return dao.getByEmail(email).getId();
    }

    @Override
    public Driver findIdByemployeeId(int id) {
        return dao.getByEmployeeId(id);
    }

    @Override
    public void updateRateDriver(int idDriver, float addedRate) {
        Driver driver = dao.getDriver(idDriver);
        int prevValue = driver.getRatedPeoples();
        driver.setRate(((driver.getRate() * prevValue) + addedRate) / (prevValue + 1));
        driver.setRatedPeoples(prevValue + 1);
        dao.update(driver);
    }

    @Override
    public void deleteDriver(String email) {
        dao.delete(dao.getByEmail(email));
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
    public List<PassengerVO> getPassengers(int idEmp) {
        return dao.getByEmployeeId(idEmp).getPassengers().stream().map(PassengerVO::fromEntity).collect(Collectors.toList());
    }
}