package com.exadel.ehitchhiking.controllers;

import com.exadel.ehitchhiking.models.Driver;
import com.exadel.ehitchhiking.models.Passenger;
import com.exadel.ehitchhiking.models.vo.DriverVO;
import com.exadel.ehitchhiking.models.vo.PassengerVO;
import com.exadel.ehitchhiking.requests.RequestBlackList;
import com.exadel.ehitchhiking.responses.Response;
import com.exadel.ehitchhiking.responses.ResponseMany;
import com.exadel.ehitchhiking.services.IDriverService;
import com.exadel.ehitchhiking.services.IPassengerService;
import org.hibernate.tool.schema.internal.exec.ScriptTargetOutputToFile;
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

    @PostMapping("/add")
    public Response<String> addToBL(@RequestBody RequestBlackList blackList) {
        Response<String> response = new Response<>();
        try {
            if (blackList.getRole().equals("D")) {
                //int idDriver = driverService.findIdByemployeeId(Integer.parseInt(blackList.getEmployeeId()));
                driverService.addPassToBL(1, Integer.parseInt(blackList.getIdPass()));
            } else if (blackList.getRole().equals("P")) {
                // int idPass = passengerService.findByEmployeeId(Integer.parseInt(blackList.getEmployeeId()));
                passengerService.addDriverToBL(1, Integer.parseInt(blackList.getIdDriver()));
            } else {
                response.setStatus("500");
                response.setData("false");
                return response;
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


    // deleting the passenger from the black list driver
    @DeleteMapping("/driver")
    public Response<String> deletePassFromBlackListDriver(String idEmp, String idPass) {
        Response<String> response = new Response<>();
        try {
            driverService.deletePassFromBL(Integer.parseInt(idEmp), Integer.parseInt(idPass));
        } catch (Exception e) {
            response.setStatus("500");
            response.setData("false");
            return response;
        }
        response.setStatus("200");
        response.setData("true");
        return response;
    }

    // deleting the driver from the blacklist pass
    @DeleteMapping("/passenger")
    public Response<String> deleteDriverFromBlackListPass(String idEmp, String idDriver) {
        Response<String> response = new Response<>();
        try {
            passengerService.deleteDriverFromBL(Integer.parseInt(idEmp), Integer.parseInt(idDriver));
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
    public ResponseMany<PassengerVO> getListOfPassengers(String empId) {
        ResponseMany<PassengerVO> responseMany = new ResponseMany<>();
        List<PassengerVO> passengers;
        try {
            passengers = driverService.getPassengers(Integer.parseInt(empId));
        } catch (Exception e) {
            responseMany.setStatus("500");
            responseMany.setData(null);
            return responseMany;
        }
        responseMany.setStatus("200");
        responseMany.setData(passengers);
        return responseMany;
    }

    @GetMapping("/passenger")
    public ResponseMany<DriverVO> getListOfDrivers(String empId) {
        ResponseMany<DriverVO> responseMany = new ResponseMany<>();

        List<DriverVO> drivers;
        try {
            drivers = passengerService.getDrivers(Integer.parseInt(empId));
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