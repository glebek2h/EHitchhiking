package com.exadel.ehitchhiking.controllers;

import com.exadel.ehitchhiking.models.vo.DriverVO;
import com.exadel.ehitchhiking.models.vo.PassengerVO;
import com.exadel.ehitchhiking.requests.RequestDriver;
import com.exadel.ehitchhiking.requests.RequestId;
import com.exadel.ehitchhiking.requests.RequestPassenger;
import com.exadel.ehitchhiking.responses.Response;
import com.exadel.ehitchhiking.services.IDriverService;
import com.exadel.ehitchhiking.services.IPassengerService;
import com.exadel.ehitchhiking.services.ITripDriverService;
import com.exadel.ehitchhiking.services.ITripPassengerService;
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
    public Response updateRatePass(@RequestBody List<RequestId> requestIds) {
        try {
            for (RequestId passenger : requestIds) {
                if (passenger.getRate() != 0) {
                    passengerService.updateRatePass(passenger.getId(), passenger.getRate());
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
            return Response.setError("An error has occurred while rating the passenger!");
        }
        return Response.setSuccess("true", "The passenger was successfully rated!");
    }

    @PutMapping("/driver")
    public Response updateRateDriver(@RequestBody List<RequestId> requestIds) {
        try {
            for (RequestId driver : requestIds) {

                if (driver.getRate() != 0) {
                    driverService.updateRateDriver(driver.getId(), driver.getRate());
                }
            }
        } catch (Exception e) {
            return Response.setError("An error has occurred while rating the driver!");
        }
        return Response.setSuccess("true", "The driver was successfully rated!");
    }

    @GetMapping("/get_driver")
    public Response getDriver(int id) {
        DriverVO driver;
        try {
            driver = tripPassengerService.findIdDriver(id);
        } catch (Exception e) {
            return Response.setError("An error has occurred while retrieving the driver!");
        }
        return Response.setSuccess(driver, "The driver info was successfully retrieved!");

    }

    @GetMapping("/get_passengers")
    public Response getPassengers(int id) {
        List<PassengerVO> passenger;
        try {
            passenger = tripDriverService.getPassengers(id);
        } catch (Exception e) {
            return Response.setError("An error has occurred while retrieving the passenger!");
        }
        return Response.setSuccess(passenger, "The passengers info was successfully retrieved!");
    }

}

