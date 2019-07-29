package com.exadel.ehitchhiking.controllers;

import com.exadel.ehitchhiking.models.vo.EmployeeVO;
import com.exadel.ehitchhiking.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class ControllersTest {

    @Autowired
    private IEmployeeService employeeService;
    @Autowired
    private IPassengerService passengerService;
    @Autowired
    private IDriverService driverService;

    @Autowired
    private PasswordEncoder encoder;

    @PostMapping("/addEmployee")
    public void createEmployee(String isAdmin, String firstName,
                               String lastName, String email, String password, String phoneNumber) {


        // creates the employee by the parameters that were passed in the func
        employeeService.createEmployee(isAdmin.equals("t"), firstName,
                lastName, email, encoder.encode(password), phoneNumber);

        // getting the employee by the username
        EmployeeVO employee = employeeService.findByEmail(email);

        // creating the driver and the passenger that are associated with that employee
        driverService.createDriver(employee.getId());
        passengerService.createPassenger(employee.getId());
    }
}