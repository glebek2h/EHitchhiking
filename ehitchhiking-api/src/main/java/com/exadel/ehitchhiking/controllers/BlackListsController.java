package com.exadel.ehitchhiking.controllers;

import com.exadel.ehitchhiking.models.vo.DriverVO;
import com.exadel.ehitchhiking.models.vo.PassengerVO;
import com.exadel.ehitchhiking.requests.RequestBlackList;
import com.exadel.ehitchhiking.requests.RequestId;
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
            for (RequestId it : BL.getData()){
                if (it.getIsBlocked()){
                    driverService.addPassToBL(BL.getIdTrip(), it.getId());
                }
            }
        } catch (Exception e) {
            return Response.setError("error");
        }
        return Response.setSuccess("true");
    }

    @PutMapping("/driver")
    public Response addDriverToBL(@RequestBody RequestBlackList BL) {
        try {
            for (RequestId it : BL.getData()){
                if (it.getIsBlocked()){
                    passengerService.addDriverToBL(BL.getIdTrip(), it.getId());
                }
            }
        } catch (Exception e) {
            return Response.setError("error");
        }
        return Response.setSuccess("true");
    }


    // deleting the passenger from the black list driver
    @DeleteMapping("/driver")
    public Response deletePassFromBlackListDriver(int idDriver, int idPass) {
        try {
            driverService.deletePassFromBL(idDriver, idPass);
        } catch (Exception e) {
            return Response.setError("error");
        }
        return Response.setSuccess("true");
    }

    // deleting the driver from the blacklist pass
    @DeleteMapping("/passenger")
    public Response deleteDriverFromBlackListPass(int empId, int idDriver) {
        try {
            passengerService.deleteDriverFromBL(empId, idDriver);
        } catch (Exception e) {
            return Response.setError("error");
        }
        return Response.setSuccess("true");
    }

    @GetMapping("/driver")
    public Response getListOfPassengers(int empId) {
        List<PassengerVO> passengers;
        try {
            passengers = driverService.getPassengers(empId);
        } catch (Exception e) {
            return Response.setError("error");
        }
        return Response.setSuccess(passengers);
    }

    @GetMapping("/passenger")
    public Response getListOfDrivers(int empId) {
        List<DriverVO> drivers;
        try {
            drivers = passengerService.getDrivers(empId);
        } catch (Exception e) {
            return Response.setError("error");
        }
        return Response.setSuccess(drivers);
    }
}

/*


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
        return response;}


*/