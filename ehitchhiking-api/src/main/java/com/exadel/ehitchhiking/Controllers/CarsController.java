package com.exadel.ehitchhiking.Controllers;

import com.exadel.ehitchhiking.Services.CarsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/Cars")
public class CarsController {

    @Autowired
    CarsService carsService;


    @PutMapping("/updateColor")
    public void updateColor(String carId, String color) {
        try {
            carsService.updateColor(Integer.getInteger(carId), color);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/updateNumber")
    public void updateNumber(String carId, String number) {
        try {
            carsService.updateNumber(Integer.getInteger(carId), number);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PostMapping("/newCar")
    public void addNewCar(String color, String number, String car_model,
                          String id_of_driver) {
        System.out.println(color);
        System.out.println(number);
        System.out.println(car_model);
        System.out.println(id_of_driver);
        System.out.println(carsService);
        carsService.createCar(color, number, car_model,
                Integer.getInteger(id_of_driver));
        try {
            /*System.out.println(carsService.getAmountCars(Integer.getInteger(id_of_driver)));
            if (carsService.getAmountCars(Integer.getInteger(id_of_driver)) < 5) {

            } else {
                // TODO: return failed status

            }*/

        } catch (Exception e) {
        }
    }


    @PostMapping("/deleteCar")
    public void deleteCar(String carId) {
        try {
            carsService.deleteCarId(Integer.getInteger(carId));

        } catch (Exception e) {
        }
    }

}
