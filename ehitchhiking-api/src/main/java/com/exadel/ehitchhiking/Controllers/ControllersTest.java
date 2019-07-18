package com.exadel.ehitchhiking.Controllers;


import com.exadel.ehitchhiking.Models.Driver;
import com.exadel.ehitchhiking.Models.Employee;
import com.exadel.ehitchhiking.Services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Timestamp;

@RestController
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

    @GetMapping("/addEmployee")
    public void createEmployee(boolean isAdmin, String userName, String firstName,
                               String lastName, String email, String password, String phoneNumber) {


        // creates the employee by the parameters that were passed in the func
        employeeService.createEmployee(isAdmin, userName, firstName,
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

    public void createTripDriver(String stratingPoint, String endingPoint, Timestamp startngTime,
                                 Timestamp endignTime, int avaliableSeats, int car_id) {

        TripDriverService tripDriverService = new TripDriverService();

        tripDriverService.createTripDriver(stratingPoint, endingPoint, startngTime,
                endignTime, avaliableSeats, car_id);
    }

    public void createTripPass(int passID, String stratingPoint, String endingPoint, Timestamp startngTime,
                               Timestamp endignTime, int neededSeats, int idTripDriver) {
        tripPassService.createTripPassenger(passID, stratingPoint, endingPoint, startngTime,
                endignTime, neededSeats, idTripDriver);
    }

    /// TODO: ask about the @Autowired


}
