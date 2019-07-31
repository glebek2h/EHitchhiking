package com.exadel.ehitchhiking.controllers;

import com.exadel.ehitchhiking.models.Car;
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
    public Response<CarVO> createCar(@RequestBody RequestCar car) {
        Response<CarVO> response = new Response<>();

        try {
            CarVO newCar = carService.createCar(car.getColor(), car.getNumber(), car.getModel(),
                    Integer.parseInt(car.getIdOfDriver()));
            response.setStatus("success");
            response.setData(newCar);
            response.setMsg("Successfully added the car!");
            return response;

        } catch (Exception e) {
            System.out.println(e);
            response.setStatus("error");
            response.setData(null);
            response.setMsg("Failed adding the car!");
            return response;
        }
    }

    @DeleteMapping("/deleteCar")
    public Response<String> deleteCar(String id) {
        Response<String> response = new Response<>();
        try {
            carService.deletedCar(Integer.parseInt(id));
            response.setStatus("success");
            response.setData("true");
            response.setMsg("Successfully deleted the car");
            return response;
        } catch (Exception e) {
            response.setStatus("error");
            response.setData("false");
            response.setMsg("Failed deleting the car");
            return response;
        }
    }

    @PutMapping("/updateCars")
    public Response<List<CarVO>> updateColor(@RequestBody List<RequestCar> cars) {
        Response<List<CarVO>> response = new Response<>();
        List<CarVO> updatedCars;
        int driverID = Integer.parseInt(cars.get(0).getIdOfDriver());
        try {
            cars.forEach(car ->carService.updateCar(
                    new CarVO(Integer.parseInt(
                            car.getId()), car.getColor(), car.getNumber(), car.getModel())));
            updatedCars = carService.getListCars(driverID);
            response.setData(updatedCars);
            response.setMsg("Successfully updated");
            response.setStatus("success");
            return response;
        } catch (Exception e) {
            response.setStatus("error");
            response.setData(null);
            response.setMsg("Failed updating cars");
            return response;
        }
    }
}
