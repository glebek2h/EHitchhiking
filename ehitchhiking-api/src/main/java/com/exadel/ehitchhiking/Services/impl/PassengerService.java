package com.exadel.ehitchhiking.Services.impl;

import com.exadel.ehitchhiking.DAO.IPassengerDAO;
import com.exadel.ehitchhiking.Models.Employee;
import com.exadel.ehitchhiking.Models.Passenger;
import com.exadel.ehitchhiking.Services.IPassengerService;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional(rollbackOn = Exception.class)
@NoArgsConstructor
public class PassengerService implements IPassengerService {


    @Autowired
    private IPassengerDAO dao;

    public void createPassenger(Employee employee) {
       dao.save(new Passenger(employee, 0.0f, 0));
    }

    public int findPassIdByUsername(String username){
        return dao.getByName(username).getId();
    }

    public void updateRatePass(String username, float addedRate) {
        Passenger passenger = dao.getByName(username);
        int amount = passenger.getRatedPeoples();
        passenger.setRate(((passenger.getRate() * amount) + addedRate) / (amount + 1));
        passenger.setRatedPeoples(amount + 1);
        dao.update(passenger);
    }

    public void deletePassenger(String username) {
        dao.delete(dao.getByName(username));
    }

    public void deletePassengerId(int id) {
        dao.delete(dao.get(id));
    }
}
