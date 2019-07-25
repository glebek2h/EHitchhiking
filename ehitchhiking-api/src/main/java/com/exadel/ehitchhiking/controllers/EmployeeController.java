package com.exadel.ehitchhiking.controllers;


import com.exadel.ehitchhiking.models.Employee;
import com.exadel.ehitchhiking.responses.Response;
import com.exadel.ehitchhiking.responses.ResponseMany;
import com.exadel.ehitchhiking.services.IEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    private IEmployeeService employeeService;

    @Autowired
    private PasswordEncoder encoder;

    @PutMapping("/updatePassword")
    public void updatePassword(String username, String password){
        try{
            employeeService.updatePassword(username, encoder.encode(password));
            //TODO: return
        }
        catch(Exception

                e){
            //TODO: figure out the return
        }
    }
    @PutMapping("/updatePhone")
    public void updatePhone(String username, String cell) {
        try {
            employeeService.updatePhone(username, cell);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/updateEmail")
    public void updateEmail(String username, String email) {
        try {
            employeeService.updateEmail(username, email);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/updateFirstName")
    public void updateFirstName(String username, String firstName) {
        try {
            employeeService.updateFirstName(username, firstName);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/updateLastName")
    public void updateLastName(String username, String lastName) {
        try {
            employeeService.updateLastName(username, lastName);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @GetMapping("/getEmployee")
    public Response<Employee> getEmployee(String id){
        Response<Employee> response = new Response<>();
        response.setStatus("200");
        response.setData(employeeService.findUserId(Integer.parseInt(id)));
        return response;
    }

    @GetMapping("/getAll")
    public ResponseMany<Employee> getAll(){
        ResponseMany<Employee> responseMany = new ResponseMany<>();
        responseMany.setStatus("200");
        responseMany.setData(employeeService.getAll());
        return responseMany;
    }
}
