package com.exadel.ehitchhiking.Controllers;


import com.exadel.ehitchhiking.Models.Employee;
import com.exadel.ehitchhiking.Response.Response;
import com.exadel.ehitchhiking.Response.ResponseMany;
import com.exadel.ehitchhiking.Services.IEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Employee")
public class EmployeeController {

    @Autowired
    private IEmployeeService employeeService;

    @PutMapping("/updatePassword")
    public void updatePassword(String username, String password){
        try{
            employeeService.updatePassword(username, password);
            //TODO: return
        }
        catch(Exception e){
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
    public Response<Employee> getEmployee(int id){
        System.out.println("here!");
        Response<Employee> response = new Response<>();
        response.setStatus("200");
        response.setObject(employeeService.findUserId(28));
        return response;
    }

    @GetMapping("/getAll")
    public ResponseMany<Employee> getAll(){
        ResponseMany<Employee> responseMany = new ResponseMany<>();
        responseMany.setStatus("200");
        responseMany.setObjects(employeeService.getAll());
        return responseMany;
    }
}
