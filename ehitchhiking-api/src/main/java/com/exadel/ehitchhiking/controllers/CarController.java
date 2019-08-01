package com.exadel.ehitchhiking.controllers;

import com.exadel.ehitchhiking.requests.RequestCar;
import com.exadel.ehitchhiking.responses.Response;
import com.exadel.ehitchhiking.services.ICarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/car")
public class CarController {

    @Autowired
    private ICarService carService;

    @PostMapping("/addCar")
    public Response createCar(@RequestBody RequestCar car) {
        try {
            carService.createCar(car.getColor(), car.getNumber(), car.getCarModel(),
                    Integer.parseInt(car.getIdOfDrive()));
        } catch (Exception e) {
            return Response.setError("error");
        }
        return Response.setSuccess("true");
    }

    @PutMapping("/deleteCar")
    public Response deleteCar(@RequestBody RequestCar car) {
        try {
            carService.deletedCar(Integer.parseInt(car.getCarId()));
        } catch (Exception e) {
            return Response.setError("error");
        }
        return Response.setSuccess("true");
    }

    @PutMapping("/updateCarParameters")
    public Response updateColor(@RequestBody RequestCar car) {
        try {
            int carId = Integer.parseInt(car.getCarId());
            carService.updateColor(carId, car.getColor());
            carService.updateNumber(carId, car.getNumber());
        } catch (Exception e) {
            return Response.setError("error");
        }
        return Response.setSuccess("true");
    }
}
