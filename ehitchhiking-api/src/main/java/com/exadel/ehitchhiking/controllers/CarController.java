package com.exadel.ehitchhiking.controllers;

import com.exadel.ehitchhiking.services.ICarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/car")
public class CarController {

    @Autowired
    private ICarService carService;

    @PutMapping("/updateColor")
    public void updateColor(String carId, String color) {
        try {
            carService.updateColor(Integer.parseInt(carId), color);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/updateNumber")
    public void updateNumber(String carId, String number) {
        try {
            carService.updateNumber(Integer.parseInt(carId), number);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PostMapping("/addCar")
    public void createCar(String color, String number, String carModel,
                          String idOfDriver) {
            carService.createCar(color, number, carModel,
                    Integer.parseInt(idOfDriver));
    }

    @DeleteMapping("/deleteCar")
    public void deleteCar(String carId) {
        try {
            carService.deleteCarId(Integer.parseInt(carId));
        } catch (Exception e) {
        }
    }
}
