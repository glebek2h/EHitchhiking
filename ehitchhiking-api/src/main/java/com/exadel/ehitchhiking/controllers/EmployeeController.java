package com.exadel.ehitchhiking.controllers;

import com.exadel.ehitchhiking.models.vo.EmployeeVO;
import com.exadel.ehitchhiking.requests.RequestEmployee;
import com.exadel.ehitchhiking.responses.Response;
import com.exadel.ehitchhiking.services.IEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    private IEmployeeService employeeService;


    @PutMapping
    public Response updateTrip(@RequestBody RequestEmployee employee) {
        try {
            employeeService.updateEmployee(employee.getEmail(), employee.getLastName(),
                    employee.getFirstName(), employee.getPhoneNum());
        } catch (Exception e) {
            return Response.setError("error");
        }
        return Response.setSuccess("true", "Success");
    }

    @GetMapping
    public Response getEmployee(int id) {
        EmployeeVO employee;
        try {
            employee = employeeService.findUserById(id);
        } catch (Exception e) {
            return Response.setError("error");
        }
        return Response.setSuccess(employee, "Success");
    }

    @GetMapping("/list")
    public Response getAll() {
        List<EmployeeVO> employeeVOS;
        try {
            employeeVOS = employeeService.getAll();
        } catch (Exception e) {
            return Response.setError("error");
        }
        return Response.setSuccess(employeeVOS, "Success");
    }
}