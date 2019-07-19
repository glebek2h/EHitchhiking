package com.exadel.ehitchhiking.Services;

import com.exadel.ehitchhiking.DAO.IDriverDAO;
import com.exadel.ehitchhiking.DAO.impl.DriverIBasicDAO;

import com.exadel.ehitchhiking.Models.Driver;

import com.exadel.ehitchhiking.Models.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;


@Service
@Transactional(rollbackOn = Exception.class)
public class DriverService {

    @Autowired
    private IDriverDAO dao = new DriverIBasicDAO();

    public void createDriver(Employee employee){

        dao.save(new Driver(employee, 0.0f,0));

    }


    public int findDriverIdByUsername(String username){
        return dao.getByName(username).getId();
    }



    // updates rate and the amount of people
    public void updateRateDriver(String username, float addedRate) {


        Driver driver = dao.getByName(username);
        int oldPeople = driver.getRating_people();
        // inc the amount of people who rated


        // set the new rate based on the new rate that was just given
        driver.setRate_driver(((driver.getRate_driver() * oldPeople) + addedRate) / (oldPeople + 1));

        driver.setRating_people(oldPeople + 1);
        dao.update(driver);

    }


    public void deleteDriver(String username){

        dao.delete(dao.getByName(username));

    }

    public void deleteDriverId(int id){

        dao.delete(dao.get(id));

    }
}