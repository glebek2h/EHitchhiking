package com.exadel.ehitchhiking.controllers;

import com.exadel.ehitchhiking.models.vo.DriverVO;
import com.exadel.ehitchhiking.models.vo.PassengerVO;
import com.exadel.ehitchhiking.requests.RequestDriver;
import com.exadel.ehitchhiking.requests.RequestPassenger;
import com.exadel.ehitchhiking.responses.Response;
import com.exadel.ehitchhiking.responses.ResponseMany;
import com.exadel.ehitchhiking.services.IDriverService;
import com.exadel.ehitchhiking.services.IPassengerService;
import com.exadel.ehitchhiking.services.impl.TripDriverService;
import com.exadel.ehitchhiking.services.impl.TripPassengerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rate")
public class RateControllers {
    @Autowired
    private IPassengerService passengerService;

    @Autowired
    private IDriverService driverService;

    @Autowired
    TripPassengerService tripPassengerService;


    @Autowired
    TripDriverService tripDriverService;

    @PutMapping("/passenger")
    public Response<String> updateRatePass(@RequestBody RequestPassenger passenger) {
        Response<String> response = new Response<>();
        try {
            passengerService.updateRatePass(Integer.parseInt(passenger.getIdPass()), Float.parseFloat(passenger.getRate()));
            response.setStatus("200");
            response.setData("true");
            return response;
        } catch (Exception e) {
            response.setStatus("500");
            response.setData("false");
            return response;
        }
    }


    @PutMapping("/driver")
    public Response<String> updateRateDriver(@RequestBody RequestDriver driver) {
        Response<String> response = new Response<>();
        try {
            driverService.updateRateDriver(Integer.parseInt(driver.getIdDriver()), Float.parseFloat(driver.getRate()));
            response.setStatus("200");
            response.setData("true");
            return response;
        } catch (Exception e) {
            response.setStatus("500");
            response.setData("false");
            return response;
        }
    }

    @GetMapping("/getDriver")
    public Response<DriverVO> getDriver(int id){

        Response<DriverVO> response = new Response<>();
        DriverVO driver;
        try {
            driver = tripPassengerService.findIdDriver(id);
        } catch (Exception e) {
            response.setStatus("500");
            response.setData(null);
            return response;
        }
            response.setStatus("200");
            response.setData(driver);
            return response;

    }

    @GetMapping("/getPassengers")
    public ResponseMany<PassengerVO> getPassengers(int id){
    ResponseMany<PassengerVO> response = new ResponseMany<>();
    List<PassengerVO> passenger;
        try {
                passenger = tripDriverService.getPassengers(id);
                } catch (Exception e) {
                response.setStatus("500");
                response.setData(null);
                return response;
                }
                response.setStatus("200");
                response.setData(passenger);
                return response;
                }

}

