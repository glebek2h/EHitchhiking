package com.exadel.ehitchhiking.controllers;

import com.exadel.ehitchhiking.models.vo.DriverVO;
import com.exadel.ehitchhiking.models.vo.PassengerVO;
import com.exadel.ehitchhiking.requests.RequestDriver;
import com.exadel.ehitchhiking.requests.RequestList;
import com.exadel.ehitchhiking.requests.RequestPassenger;
import com.exadel.ehitchhiking.responses.Response;
import com.exadel.ehitchhiking.responses.ResponseMany;
import com.exadel.ehitchhiking.services.IDriverService;
import com.exadel.ehitchhiking.services.IPassengerService;
import com.exadel.ehitchhiking.services.ITripDriverService;
import com.exadel.ehitchhiking.services.ITripPassengerService;
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
    ITripPassengerService tripPassengerService;


    @Autowired
    ITripDriverService tripDriverService;
    @PutMapping("/passenger")
    public Response<String> updateRatePass(@RequestBody RequestList passengerList) {
        Response<String> response = new Response<>();
        try {
            for (RequestPassenger passenger : passengerList.getRequestListPass()) {
                passengerService.updateRatePass(Integer.parseInt(passenger.getIdPass()), Float.parseFloat(passenger.getRate()));
            }

        } catch (Exception e) {
            response.setStatus("500");
            response.setData("false");
            return response;
        }
        response.setStatus("200");
        response.setData("true");
        return response;
    }


    @PutMapping("/driver")
    public Response<String> updateRateDriver(@RequestBody RequestList driverList) {
        Response<String> response = new Response<>();
        try {
            for (RequestDriver driver : driverList.requestListDriver) {
                driverService.updateRateDriver(Integer.parseInt(driver.getIdDriver()), Float.parseFloat(driver.getRate()));
            }

        } catch (Exception e){ System.out.println(e);
            response.setStatus("500");
            response.setData("false");
            return response;
        }
        response.setStatus("200");
        response.setData("true");
        return response;
    }

    @GetMapping("/getDriver")
    public Response<DriverVO> getDriver(int id){

        Response<DriverVO> response = new Response<>();
        DriverVO driver;
        System.out.println(id);
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
        System.out.println(id);
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

