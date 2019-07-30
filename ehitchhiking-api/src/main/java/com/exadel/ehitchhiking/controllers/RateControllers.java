package com.exadel.ehitchhiking.controllers;

import com.exadel.ehitchhiking.requests.RequestDriver;
import com.exadel.ehitchhiking.requests.RequestPassenger;
import com.exadel.ehitchhiking.responses.Response;
import com.exadel.ehitchhiking.services.IDriverService;
import com.exadel.ehitchhiking.services.IPassengerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rate")
public class RateControllers {
    @Autowired
    private IPassengerService passengerService;

    @Autowired
    private IDriverService driverService;

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
}

