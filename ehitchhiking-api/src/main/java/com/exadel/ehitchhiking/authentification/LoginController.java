package com.exadel.ehitchhiking.authentification;

import com.exadel.ehitchhiking.models.Employee;
import com.exadel.ehitchhiking.responses.Response;
import com.exadel.ehitchhiking.services.IEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class LoginController {

    @Autowired
    private IEmployeeService employeeService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping
    public Response<Employee> getUser(String username, String password) {
        Response<Employee> response = new Response<>();
        Employee employee;
        try {
            employee = employeeService.findUserUsername(username);
        } catch (Exception e) {
            response.setStatus("error");
            response.setData(null);
            response.setMsg("invalid user or password");
            return response;
        }
        if (employee.getPassword().equals(passwordEncoder.encode(password))) {
            response.setStatus("success");
            response.setData(employee);
            response.setMsg(null);
            return response;
        }
        response.setStatus("error");
        response.setData(null);
        response.setMsg("invalid user or password");
        return response;
    }
}
