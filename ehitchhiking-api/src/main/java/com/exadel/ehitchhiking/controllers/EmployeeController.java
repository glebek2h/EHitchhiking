package com.exadel.ehitchhiking.controllers;

import com.exadel.ehitchhiking.models.vo.EmployeeVO;
import com.exadel.ehitchhiking.responses.Response;
import com.exadel.ehitchhiking.services.IEmployeeService;
import com.exadel.ehitchhiking.services.mail.IEmailSender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    private IEmployeeService employeeService;

    @Autowired
    private IEmailSender emailSender;

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
}