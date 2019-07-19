package com.exadel.ehitchhiking.Controllers;


import com.exadel.ehitchhiking.Models.Driver;
import com.exadel.ehitchhiking.Models.Employee;
import com.exadel.ehitchhiking.Services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Timestamp;

@RestController
@RequestMapping("/test")
public class ControllersTest {

    // creates the services for empl, pass and driver
    @Autowired
    EmployeeService employeeService = new EmployeeService();
    @Autowired
    PassengerService passengerService = new PassengerService();
    @Autowired
    DriverService driverService = new DriverService();
    @Autowired
    BlackListDriverService blackListDriverService = new BlackListDriverService();
    @Autowired
    BlackListPassengerService blackListPassengerService = new BlackListPassengerService();
    @Autowired
    TripPassengerService tripPassService = new TripPassengerService();

    @PostMapping("/addEmployee")

    public void createEmployee(String isAdmin, String userName, String firstName,
                               String lastName, String email, String password, String phoneNumber) {



        // creates the employee by the parameters that were passed in the func
        employeeService.createEmployee(isAdmin.equals("t"), userName, firstName,
                lastName, email, password, phoneNumber);

        // getting the employee by the username
        Employee employee = employeeService.findUserUsername(userName);


        // creating the driver and the passenger that are associated with that employee
        driverService.createDriver(employee);
        passengerService.createPassenger(employee);


        int idPass = passengerService.findPassIdByUsername(userName);
        blackListPassengerService.createBlackList(idPass);

        int idDriver = driverService.findDriverIdByUsername(userName);
        blackListDriverService.createBlackList(idDriver);
    }



}
