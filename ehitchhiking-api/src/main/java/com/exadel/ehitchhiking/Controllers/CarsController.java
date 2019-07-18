package com.exadel.ehitchhiking.Controllers;

import com.exadel.ehitchhiking.Services.CarsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CarsController {

    @Autowired
    CarsService carsService = new CarsService();


    @PutMapping("/Cars/updateColor")
    public void updateColor(int carId, String color) {
        try {
            carsService.updateColor(carId, color);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/Cars/updateNumber")
    public void updateNumber(int carId, String number) {
        try {
            carsService.updateNumber(carId, number);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PostMapping("/Cars/newCar")
    public void addNewCar(String color, String number, String car_model,
                          int id_of_driver) {
        try {
            if (carsService.getAmountCars(id_of_driver) < 5) {
                carsService.createCar(color, number, car_model,
                        id_of_driver);
            } else {
                // TODO: return failed status

            }

        } catch (Exception e) {
        }
    }


    @PostMapping("/Cars/deleteCar")
    public void addNewCar(int carId) {
        try {
            carsService.deleteCarId(carId);

        } catch (Exception e) {
        }
    }

}
