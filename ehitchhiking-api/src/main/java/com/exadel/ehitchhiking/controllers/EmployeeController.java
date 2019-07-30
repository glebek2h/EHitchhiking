package com.exadel.ehitchhiking.controllers;


import com.exadel.ehitchhiking.models.Employee;
import com.exadel.ehitchhiking.models.vo.EmployeeVO;
import com.exadel.ehitchhiking.requests.RequestEmployee;
import com.exadel.ehitchhiking.responses.Response;
import com.exadel.ehitchhiking.responses.ResponseMany;
import com.exadel.ehitchhiking.services.IEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    private IEmployeeService employeeService;


    @PutMapping
    public Response<String> updateTrip(@RequestBody RequestEmployee employee) {
        Response<String> response = new Response<>();
        try {
            employeeService.updateEmployee(employee.getEmail(), employee.getLastName(),
                    employee.getFirstName(), employee.getPhoneNum());
            response.setStatus("200");
            response.setData("true");
            return response;
        } catch (Exception e) {
            response.setStatus("500");
            response.setData("false");
            return response;
        }
    }

    @GetMapping
    public Response<EmployeeVO> getEmployee(String id) {
        Response<EmployeeVO> response = new Response<>();
        try {
            response.setStatus("200");
            response.setData(employeeService.findUserId(Integer.parseInt(id)));
            return response;
        } catch (Exception e) {
            response.setStatus("500");
            response.setData(null);
            return response;
        }

    }

    @GetMapping("/list")
    public ResponseMany<EmployeeVO> getAll() {
        ResponseMany<EmployeeVO> response = new ResponseMany<>();
        try {
            response.setStatus("200");
            response.setData(employeeService.getAll());
            return response;
        } catch (Exception e){
            response.setStatus("500");
            response.setData(null);
            return response;
        }
    }
}