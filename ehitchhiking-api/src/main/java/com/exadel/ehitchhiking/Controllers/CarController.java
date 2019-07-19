package com.exadel.ehitchhiking.Controllers;

import com.exadel.ehitchhiking.Services.impl.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/Car")
public class CarController {

    @Autowired
    private CarService carsService;


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

    @PostMapping
    public void addNewCar(String color, String number, String carModel,
                          String idOfDriver) {
        try {
            carsService.createCar(color, number, carModel,
                    Integer.getInteger(idOfDriver));
        } catch (Exception e) {
        }
    }

    @DeleteMapping
    public void deleteCar(String carId) {
        try {
            carsService.deleteCarId(Integer.getInteger(carId));
        } catch (Exception e) {
        }
    }
}
