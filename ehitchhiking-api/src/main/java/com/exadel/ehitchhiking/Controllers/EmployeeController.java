package com.exadel.ehitchhiking.Controllers;


import com.exadel.ehitchhiking.Services.impl.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Employee")
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;

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
}
