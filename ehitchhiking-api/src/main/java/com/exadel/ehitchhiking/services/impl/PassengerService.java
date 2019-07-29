package com.exadel.ehitchhiking.services.impl;

import com.exadel.ehitchhiking.daos.IDriverDAO;
import com.exadel.ehitchhiking.daos.IEmployeeDAO;
import com.exadel.ehitchhiking.daos.IPassengerDAO;
import com.exadel.ehitchhiking.models.Driver;
import com.exadel.ehitchhiking.models.Employee;
import com.exadel.ehitchhiking.models.Passenger;
import com.exadel.ehitchhiking.models.vo.DriverVO;
import com.exadel.ehitchhiking.models.vo.TripDriverVO;
import com.exadel.ehitchhiking.services.IPassengerService;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional(rollbackOn = Exception.class)
@NoArgsConstructor
public class PassengerService implements IPassengerService {


    @Autowired
    private IPassengerDAO dao;

    @Autowired
    private IDriverDAO driverDAO;

    @Autowired
    private IEmployeeDAO employeeDAO;

    @Override
    public void createPassenger(Integer idPass) {
       dao.save(new Passenger(employeeDAO.getEmployee(idPass), 0.0f, 0));
    }

    @Override
    public int findPassIdByUsername(String username){
        return dao.getByName(username).getId();
    }

    @Override
    public void updateRatePass(int idPass, float addedRate) {
        Passenger passenger = dao.getPassenger(idPass);
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
    public void deletePassengerId(int idPass) {
        dao.delete(dao.getPassenger(idPass));
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
    public List<DriverVO> getDrivers(int idPass) {
        return dao.getPassenger(idPass).getDrivers().stream().map(DriverVO::fromEntity).collect(Collectors.toList());
    }


    @Override
    public int findIdByemployeeId(int id) {
        return dao.getByEmployeeId(id);
    }

}
