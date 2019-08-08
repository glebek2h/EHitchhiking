package com.exadel.ehitchhiking.controllers;

import com.exadel.ehitchhiking.models.vo.DriverVO;
import com.exadel.ehitchhiking.models.vo.PassengerVO;
import com.exadel.ehitchhiking.requests.RequestBlackList;
import com.exadel.ehitchhiking.responses.Response;
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


    // takes in the employeeId, the role in format "Driver"/"Passenger" and the id of the person that is going to be in the BL
    @PutMapping("/passenger")
    public Response addPassToBL(@RequestBody RequestBlackList BL) {
        try {
            driverService.addPassToBL(BL.getIdTrip(), BL.getData());
        } catch (Exception e) {
            return Response.setError("An error has occurred while adding the passenger to the blacklist!");
        }
        return Response.setSuccess("true", "The passenger was successfully added to the blacklist!");
    }

    @PutMapping("/driver")
    public Response addDriverToBL(@RequestBody RequestBlackList BL) {
        try {
            passengerService.addDriverToBL(BL.getIdTrip(), BL.getData());
        } catch (Exception e) {
            return Response.setError("An error has occurred while adding the driver to the blacklist!");
        }
        return Response.setSuccess("true", "The driver was successfully added to the blacklist!");
    }


    // deleting the passenger from the black list driver
    @DeleteMapping("/passenger")
    public Response deletePassFromBlackListDriver(int empId, int idPass) {
        try {
            driverService.deletePassFromBL(empId, idPass);
        } catch (Exception e) {
            return Response.setError("An error has occurred while deleting the passenger from the blacklist!");
        }
        return Response.setSuccess("true", "The passenger was successfully deleted from the blacklist!");
    }

    // deleting the driver from the blacklist pass
    @DeleteMapping("/driver")
    public Response deleteDriverFromBlackListPass(int empId, int idDriver) {
        try {
            passengerService.deleteDriverFromBL(empId, idDriver);
        } catch (Exception e) {
            return Response.setError("An error has occurred while deleting the driver from the blacklist!");
        }
        return Response.setSuccess("true", "The driver was successfully deleted from the blacklist!");
    }

    @GetMapping("/driver")
    public Response getListOfPassengers(int empId) {
        List<PassengerVO> passengers;
        try {
            passengers = driverService.getPassengers(empId);
        } catch (Exception e) {
            return Response.setError("An error has occurred while retrieving all passengers!");
        }
        return Response.setSuccess(passengers, "All passengers' info was successfully retrieved!");
    }

    @GetMapping("/passenger")
    public Response getListOfDrivers(int empId) {
        List<DriverVO> drivers;
        try {
            drivers = passengerService.getDrivers(empId);
        } catch (Exception e) {
            return Response.setError("An error has occurred while retrieving all drivers!");
        }
        return Response.setSuccess(drivers, "All drivers' info was successfully retrieved!");
    }
}
