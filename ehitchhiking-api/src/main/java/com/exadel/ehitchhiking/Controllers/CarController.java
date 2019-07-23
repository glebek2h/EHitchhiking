package com.exadel.ehitchhiking.Controllers;

import com.exadel.ehitchhiking.Services.ICarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/Car")
public class CarController {

    @Autowired
    private ICarService carService;

    @PutMapping("/updateColor")
    public void updateColor(String carId, String color) {
            carService.updateColor(Integer.getInteger(carId), color);
        try {
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/updateNumber")
    public void updateNumber(String carId, String number) {
            carService.updateNumber(Integer.getInteger(carId), number);
        try {
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PostMapping("/addCar")
    public void createCar(String color, String number, String carModel
                          /*String idOfDriver*/) {
            carService.createCar(color, number, carModel);
        try {
        } catch (Exception e) {
        }
    }

    @DeleteMapping("/deleteCar")
    public void deleteCar(String carId) {
            carService.deleteCarId(Integer.getInteger(carId));
        try {
        } catch (Exception e) {
        }
    }
}
