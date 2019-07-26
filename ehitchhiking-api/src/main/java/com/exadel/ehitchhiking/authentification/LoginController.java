package com.exadel.ehitchhiking.authentification;

import com.exadel.ehitchhiking.models.Employee;
import com.exadel.ehitchhiking.responses.Response;
import com.exadel.ehitchhiking.services.IEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

@RestController
@RequestMapping("/auth")
public class LoginController {

    @Autowired
    private IEmployeeService employeeService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private HttpSession httpSession;

    @PostMapping
    public Response<Employee> getUser(@RequestBody AuthData authData) {
        Response<Employee> response = new Response<>();
        Employee employee;
        System.out.println(authData.toString());
        try {
            employee = employeeService.findUserUsername(authData.getLogin());
        } catch (Exception e) {
            response.setStatus("error");
            response.setData(null);
            response.setMsg("invalid user or password");
            return response;
        }
        if (employee.getPassword().equals(passwordEncoder.encode(authData.getPassword()))) {
            response.setStatus("success");
            response.setData(employee);
            response.setMsg(null);
            httpSession.setAttribute("id", employee.getId());
            return response;
        }
        response.setStatus("error");
        response.setData(null);
        response.setMsg("invalid user or password");
        return response;
    }


}
