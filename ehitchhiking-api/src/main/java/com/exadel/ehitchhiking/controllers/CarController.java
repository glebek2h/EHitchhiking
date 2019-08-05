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

    @GetMapping("/all")
    public Response getAllUserCars(int id) {
        List<CarVO> cars;
        try {
            cars = carService.getListCars(id);
        } catch (Exception e) {
            return Response.setError("An error has occurred while retrieving the cars!");
        }
        return Response.setSuccess(cars, "The cars were retrieved successfully!");
    }

    @PostMapping("/add")
    public Response createCar(@RequestBody RequestCar car) {
        CarVO newCar;
        try {
            newCar = carService.createCar(car.getColor(), car.getNumber(), car.getModel(),
                    car.getIdOfDriver());

        } catch (Exception e) {
            return Response.setError("An error has occurred while adding the car!");
        }
        return Response.setSuccess(newCar, "The car was added successfully!");
    }

    @DeleteMapping("/delete")
    public Response deleteCar(int id) {
        try {
            carService.deletedCar(id);
        } catch (Exception e) {
            return Response.setError("An error has occurred while deleting the car!");
        }
        return Response.setSuccess("true", "The car was deleted successfully!");
    }

    @PutMapping("/update")
    public Response updateColor(@RequestBody List<RequestCar> cars) {
        List<CarVO> updatedCars;
        int empId = cars.get(0).getIdOfDriver();
        try {
            cars.forEach(car ->carService.updateCar(
                    new CarVO(
                            car.getId(), car.getColor(), car.getNumber(), car.getModel())));
            updatedCars = carService.getListCars(empId);

        } catch (Exception e) {
            return Response.setError("An error has occurred while updating the cars!");
        }
        return Response.setSuccess(updatedCars, "The car was updated successfully!");
    }
}
