package com.exadel.ehitchhiking.controllers;

import com.exadel.ehitchhiking.models.vo.CarVO;
import com.exadel.ehitchhiking.requests.RequestCar;
import com.exadel.ehitchhiking.responses.*;
import com.exadel.ehitchhiking.services.ICarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/car")
public class CarController {

    @Autowired
    private ICarService carService;

    @GetMapping("/getAll")
    public Response getAllUserCars(String id) {
        List<CarVO> cars;
        try {
            cars = carService.getListCars(Integer.parseInt(id));
        } catch (Exception e) {
            return Response.setError("Failed getting cars");
        }
        return Response.setSuccess(cars, "Successfully got cars");
    }

    @PostMapping("/addCar")
    public Response createCar(@RequestBody RequestCar car) {
        CarVO newCar;
        try {
            newCar = carService.createCar(car.getColor(), car.getNumber(), car.getModel(),
                    Integer.parseInt(car.getIdOfDriver()));

        } catch (Exception e) {
            return Response.setError("Failed adding the car");
        }
        return Response.setSuccess(newCar, "Successfully added the car");
    }

    @DeleteMapping("/deleteCar")
    public Response deleteCar(String id) {
        try {
            carService.deletedCar(Integer.parseInt(id));
        } catch (Exception e) {
            return Response.setError("Failed deleting the car");
        }
        return Response.setSuccess("true", "Successfully deleted the car");
    }

    @PutMapping("/updateCars")
    public Response updateColor(@RequestBody List<RequestCar> cars) {
        List<CarVO> updatedCars;
        int driverID = Integer.parseInt(cars.get(0).getIdOfDriver());
        try {
            cars.forEach(car ->carService.updateCar(
                    new CarVO(Integer.parseInt(
                            car.getId()), car.getColor(), car.getNumber(), car.getModel())));
            updatedCars = carService.getListCars(driverID);

        } catch (Exception e) {
            return Response.setError("Failed updating cars");
        }
        return Response.setSuccess(updatedCars, "Successfully updated cars");
    }
}
