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

    @GetMapping("/get_all")
    public Response getAllUserCars(int id) {
        List<CarVO> cars;
        try {
            cars = carService.getListCars(id);
        } catch (Exception e) {
            return Response.setError("error");
        }
        return Response.setSuccess(cars);
    }

    @PostMapping("/add_car")
    public Response createCar(@RequestBody RequestCar car) {
        CarVO newCar;
        try {
            newCar = carService.createCar(car.getColor(), car.getNumber(), car.getModel(),
                    car.getId());

        } catch (Exception e) {
            return Response.setError("error");
        }
        return Response.setSuccess(newCar);
    }

    @DeleteMapping("/delete_car")
    public Response deleteCar(int id) {
        try {
            carService.deletedCar(id);
        } catch (Exception e) {
            return Response.setError("error");
        }
        return Response.setSuccess("true");
    }

    @PutMapping("/update_cars")
    public Response updateColor(@RequestBody List<RequestCar> cars) {
        List<CarVO> updatedCars;
        int empId = cars.get(0).getId();
        try {
            cars.forEach(car ->carService.updateCar(
                    new CarVO(
                            car.getId(), car.getColor(), car.getNumber(), car.getModel())));
            updatedCars = carService.getListCars(empId);

        } catch (Exception e) {
            return Response.setError("error");
        }
        return Response.setSuccess(updatedCars);
    }
}
