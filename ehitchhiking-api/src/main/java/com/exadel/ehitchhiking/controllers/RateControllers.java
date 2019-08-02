package com.exadel.ehitchhiking.controllers;

import com.exadel.ehitchhiking.models.vo.DriverVO;
import com.exadel.ehitchhiking.models.vo.PassengerVO;
import com.exadel.ehitchhiking.requests.RequestDriver;
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
    public Response updateRatePass(@RequestBody List<RequestPassenger> passengerList) {
        try {
            for (RequestPassenger passenger : passengerList) {
                if (passenger.getRate() != 0) {
                    passengerService.updateRatePass(passenger.getIdPass(), passenger.getRate());
                }
            }
        } catch (Exception e) {
            return Response.setError("error");
        }
        return Response.setSuccess("true", "Success");
    }


    @PutMapping("/driver")
    public Response updateRateDriver(@RequestBody List<RequestDriver> driverList) {
        try {
            for (RequestDriver driver : driverList) {
                if (driver.getRate() != 0) {
                    driverService.updateRateDriver(driver.getIdDriver(), driver.getRate());
                }
            }
        } catch (Exception e) {
            return Response.setError("error");
        }
        return Response.setSuccess("true", "Success");
    }

    @GetMapping("/get_driver")
    public Response getDriver(int id) {
        DriverVO driver;
        try {
            driver = tripPassengerService.findIdDriver(id);
        } catch (Exception e) {
            return Response.setError("error");
        }
        return Response.setSuccess(driver, "Success");

    }

    @GetMapping("/get_passengers")
    public Response getPassengers(int id) {
        List<PassengerVO> passenger;
        try {
            passenger = tripDriverService.getPassengers(id);
        } catch (Exception e) {
            return Response.setError("error");
        }
        return Response.setSuccess(passenger, "Success");
    }

}

