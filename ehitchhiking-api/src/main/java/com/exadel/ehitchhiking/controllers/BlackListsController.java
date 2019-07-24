package com.exadel.ehitchhiking.controllers;

import com.exadel.ehitchhiking.models.Driver;
import com.exadel.ehitchhiking.models.Passenger;
import com.exadel.ehitchhiking.responses.Response;
import com.exadel.ehitchhiking.responses.ResponseMany;
import com.exadel.ehitchhiking.services.IDriverService;
import com.exadel.ehitchhiking.services.IPassengerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/blackList")
public class BlackListsController {

    @Autowired
    private IDriverService driverService;

    @Autowired
    private IPassengerService passengerService;

    @PostMapping("/driver")
    public Response<String> addPassToBlackListDriver(String idDriver, String idPass) {
        Response<String> response = new Response<>();
        try {
            driverService.addPassToBL(Integer.parseInt(idDriver), Integer.parseInt(idPass));
        } catch (Exception e) {
            response.setStatus("500");
            response.setData("false");
            return response;
        }
        response.setStatus("200");
        response.setData("true");
        return response;
    }

    // deleting the passenger from the black list driver
    @DeleteMapping("/driver")
    public Response<String> deletePassFromBlackListDriver(String idDriver, String idPass) {
        System.out.println("here!!!");
        Response<String> response = new Response<>();
        try {
            driverService.deletePassFromBL(Integer.parseInt(idDriver), Integer.parseInt(idPass));
        } catch (Exception e) {
            response.setStatus("500");
            response.setData("false");
            return response;
        }
        response.setStatus("200");
        response.setData("true");
        return response;
    }




    @PostMapping("/passenger")
    public Response<String> addDriverToBlackListPass(String idPass, String idDriver) {
        Response<String> response = new Response<>();
        try {
            passengerService.addDriverToBL(Integer.parseInt(idPass), Integer.parseInt(idDriver));
        } catch (Exception e) {
            response.setStatus("500");
            response.setData("false");
            return response;
        }
        response.setStatus("200");
        response.setData("true");
        return response;
    }

    // deleting the passenger from the pass list driver
    @DeleteMapping("/passenger")
    public Response<String> deleteDriverFromBlackListPass(String idPass, String idDriver) {
        Response<String> response = new Response<>();
        try {
            passengerService.deleteDriverToBL(Integer.parseInt(idPass), Integer.parseInt(idDriver));
        } catch (Exception e) {
            response.setStatus("500");
            response.setData("false");
            return response;
        }
        response.setStatus("200");
        response.setData("true");
        return response;
    }

    @GetMapping("/driver")
    public ResponseMany<Passenger> getListOfPassengers(String idDriver) {
        ResponseMany<Passenger> responseMany = new ResponseMany<>();
        List<Passenger> passengers;
        try {
            passengers = driverService.getPassengers(Integer.parseInt(idDriver));
        }catch (Exception e){
            responseMany.setStatus("500");
            responseMany.setData(null);
            return responseMany;
        }
        responseMany.setStatus("200");
        responseMany.setData(passengers);
        return responseMany;

    }

    @GetMapping("/passenger")
    public ResponseMany<Driver> getListOfDrivers(String idPass) {
        ResponseMany<Driver> responseMany = new ResponseMany<>();
        List<Driver> drivers;
        try {
            drivers = passengerService.getDrivers(Integer.parseInt(idPass));
        } catch (Exception e) {
            responseMany.setStatus("500");
            responseMany.setData(null);
            return responseMany;
        }
        responseMany.setStatus("200");
        responseMany.setData(drivers);
        return responseMany;
    }
}
