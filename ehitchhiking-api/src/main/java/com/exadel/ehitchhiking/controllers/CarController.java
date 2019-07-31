package com.exadel.ehitchhiking.controllers;

import com.exadel.ehitchhiking.models.vo.CarVO;
import com.exadel.ehitchhiking.requests.RequestCar;
import com.exadel.ehitchhiking.responses.*;
import com.exadel.ehitchhiking.services.ICarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/car")
public class CarController {

    @Autowired
    private ICarService carService;

    @GetMapping("/getAll")
    public Response<List<CarVO>> getAllUserCars(String id) {
        Response<List<CarVO>> response = new Response<>();
        List<CarVO> cars = new ArrayList<>();
        try {
            cars = carService.getListCars(Integer.parseInt(id));
            response.setData(cars);
            response.setStatus("success");
            response.setMsg("Successfully got cars");
            return response;
        } catch (Exception e) {
            response.setData(cars);
            response.setStatus("error");
            response.setMsg("Failed getting cars");
            return response;
        }
    }

    @PostMapping("/addCar")
    public Response<String> createCar(@RequestBody RequestCar car) {
        Response<String> response = new Response<>();
        try {
            carService.createCar(car.getColor(), car.getNumber(), car.getCarModel(),
                    Integer.parseInt(car.getIdOfDrive()));
            response.setStatus("200");
            response.setData("true");
            return response;

        } catch (Exception e) {
            response.setStatus("500");
            response.setData("false");
            return response;
        }
    }

    @PutMapping("/deleteCar")
    public Response<String> deleteCar(@RequestBody RequestCar car) {
        Response<String> response = new Response<>();
        try {
            carService.deletedCar(Integer.parseInt(car.getCarId()));
            response.setStatus("200");
            response.setData("true");
            return response;
        } catch (Exception e) {
            response.setStatus("500");
            response.setData("false");
            return response;
        }
    }

    @PutMapping("/updateCarParameters")
    public Response<String> updateColor(@RequestBody RequestCar car) {
        Response<String> response = new Response<>();
        System.out.println(car.getCarId());
        try {
            int carId = Integer.parseInt(car.getCarId());
            carService.updateColor(carId, car.getColor());
            carService.updateNumber(carId, car.getNumber());
            response.setStatus("200");
            response.setData("true");
            return response;
        } catch (Exception e) {
            response.setStatus("500");
            response.setData("false");
            return response;
        }
    }
}
