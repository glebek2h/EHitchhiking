package com.exadel.ehitchhiking.Services;

import com.exadel.ehitchhiking.DAO.impl.CarsIBasicDAO;
import com.exadel.ehitchhiking.DAO.impl.DriverIBasicDAO;
import com.exadel.ehitchhiking.Models.Cars;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CarsService {

    @Autowired
    private CarsIBasicDAO dao = new CarsIBasicDAO();
    @Autowired
    private DriverIBasicDAO driverDao = new DriverIBasicDAO();

    public void createCar(String color, String number, String car_model,
                           int id_of_driver){
        dao.save(new Cars(color, number, car_model,
                          id_of_driver));

    }


    /// finding a veh number with the car_id
    public void findCarNumber(int car_id){

        dao.getNumber(car_id);

    }


    // finding the car by it's id
    public void findId(int id){

        dao.get(id);

    }

    // finding the cars of one user
    public void findAllCarsOfUser(String username){


        // from username find driver id and get all cars associated with that user
        dao.getAllUsers(username);

    }


    // change the veh number if you have the car id
    public void updateNumber(int car_id, String newNumber){

        Cars car  = dao.get(car_id);
        car.setVeh_number(newNumber);
        dao.update(car);

    }


    /// updating the color of the car by the id of the car
    public void updateColor(int car_id, String color){

        Cars car  = dao.get(car_id);
        car.setCar_color(color);
        dao.update(car);

    }



    public void deleteCarId(int id){

        dao.delete(dao.get(id));

    }

}
