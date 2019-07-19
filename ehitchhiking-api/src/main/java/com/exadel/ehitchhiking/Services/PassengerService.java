package com.exadel.ehitchhiking.Services;

import com.exadel.ehitchhiking.DAO.IPassengerDAO;
import com.exadel.ehitchhiking.DAO.impl.PassengerIBasicDAO;
import com.exadel.ehitchhiking.Models.Employee;
import com.exadel.ehitchhiking.Models.Passenger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional(rollbackOn = Exception.class)
public class PassengerService {


    @Autowired
    private IPassengerDAO dao = new PassengerIBasicDAO();

    public void createPassenger(Employee employee) {

       dao.save(new Passenger(employee, 0.0f, 0));

    }

    public int findPassIdByUsername(String username){
        return dao.getByName(username).getId();
    }



    // updates rate and the amout of people
    public void updateRatePass(String username, float addedRate) {
        Passenger passenger = dao.getByName(username);
        int amount = passenger.getRatingAmount();
        // inc the amount of people who rated


        // set the new rate based on the new rate that was just given
        passenger.setPassengerRate(((passenger.getPassengerRate() * amount) + addedRate) / (amount + 1));
        passenger.setRatingAmount(amount + 1);

        dao.update(passenger);
    }


    public void deletePassseger(String username) {
        dao.delete(dao.getByName(username));
    }

    public void deletePassengerId(int id) {

        dao.delete(dao.get(id));

    }
}
