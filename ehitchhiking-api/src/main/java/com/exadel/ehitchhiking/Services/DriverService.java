package com.exadel.ehitchhiking.Services;

import com.exadel.ehitchhiking.DAO.impl.DriverIBasicDAO;

import com.exadel.ehitchhiking.Models.Driver;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class DriverService {

    @Autowired
    private DriverIBasicDAO dao = new DriverIBasicDAO();

    public void createDriver(){


        dao.save(new Driver(0.0f,0));

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