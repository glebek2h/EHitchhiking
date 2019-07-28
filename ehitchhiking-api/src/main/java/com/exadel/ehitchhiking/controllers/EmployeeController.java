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

    @Autowired
    private PasswordEncoder encoder;


    //TODO: hwo to update all the parameters: by email or by the id
    //TODO: can we change the email if that is our username?


    @PutMapping("/updateEmployeeInfo")
    public Response<String> updateTrip(@RequestBody RequestEmployee employee) {
        Response<String> response = new Response<>();
        try {
            employeeService.updatePassword(employee.getEmail(), encoder.encode(employee.getPassword()));
            employeeService.updatePhone(employee.getEmail(), employee.getPhoneNum());
            employeeService.updateEmail(employee.getEmail(), employee.getEmail());
            employeeService.updateFirstName(employee.getEmail(), employee.getFirstName());
            employeeService.updateLastName(employee.getEmail(), employee.getLastName());
            response.setStatus("200");
            response.setData("true");
            return response;
        }
        catch (Exception e){
            response.setStatus("500");
            response.setData("false");
            return response;}
    }

    @GetMapping("/getEmployee")
    public Response<EmployeeVO> getEmployee(String id){
        Response<EmployeeVO> response = new Response<>();
        response.setStatus("200");
        response.setData(employeeService.findUserId(Integer.parseInt(id)));
        return response;
    }

    @GetMapping("/getAll")
    public ResponseMany<EmployeeVO> getAll(){
        ResponseMany<EmployeeVO> responseMany = new ResponseMany<>();
        responseMany.setStatus("200");
        responseMany.setData(employeeService.getAll());
        return responseMany;
    }
}
