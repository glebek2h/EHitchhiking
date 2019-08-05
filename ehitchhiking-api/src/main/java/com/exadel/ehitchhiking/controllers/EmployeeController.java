package com.exadel.ehitchhiking.controllers;

import com.exadel.ehitchhiking.models.vo.EmployeeVO;
import com.exadel.ehitchhiking.requests.RequestEmployee;
import com.exadel.ehitchhiking.responses.Response;
import com.exadel.ehitchhiking.services.IEmployeeService;
import com.exadel.ehitchhiking.services.mail.IEmailSender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    private IEmployeeService employeeService;

    @Autowired
    private IEmailSender emailSender;


    @PutMapping
    public Response updateTrip(@RequestBody RequestEmployee employee) {
        try {
            employeeService.updateEmployee(employee.getEmail(), employee.getLastName(),
                    employee.getFirstName(), employee.getPhoneNum());
        } catch (Exception e) {
            return Response.setError("An error has occurred while updating the trip!");
        }
        return Response.setSuccess("true", "The trip was successfully updated!");
    }

    @GetMapping
    public Response getEmployee(Integer id) {
        EmployeeVO employee;
        try {
            employee = employeeService.findUserById(id);
        } catch (Exception e) {
            System.out.println(e);
            return Response.setError("An error has occurred while retrieving the employee's info!");
        }
        return Response.setSuccess(employee, "The employee info was successfully retrieved!");
    }

    @GetMapping("/list")
    public Response getAll() {
        List<EmployeeVO> employeeVOS;
        try {
            employeeVOS = employeeService.getAll();
        } catch (Exception e) {
            return Response.setError("An error has occurred while retrieving the employees' info!");
        }
        return Response.setSuccess(employeeVOS, "All employees' info was successfully retrieved!");
    }
}