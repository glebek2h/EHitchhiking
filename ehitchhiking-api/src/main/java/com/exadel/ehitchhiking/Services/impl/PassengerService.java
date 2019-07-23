package com.exadel.ehitchhiking.Services.impl;

import com.exadel.ehitchhiking.DAO.IPassengerDAO;
import com.exadel.ehitchhiking.Models.Employee;
import com.exadel.ehitchhiking.Models.Passenger;
import com.exadel.ehitchhiking.Services.IPassengerService;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional(rollbackOn = Exception.class)
@NoArgsConstructor
public class PassengerService implements IPassengerService {


    @Autowired
    private IPassengerDAO dao;

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
}
