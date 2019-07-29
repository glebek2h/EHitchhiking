package com.exadel.ehitchhiking.authentification;

import com.exadel.ehitchhiking.models.vo.EmployeeVO;
import com.exadel.ehitchhiking.responses.Response;
import com.exadel.ehitchhiking.services.IEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;

@RestController
@RequestMapping(value = "/auth")
public class LoginController {

    @Autowired
    private IEmployeeService employeeService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private HttpSession httpSession;

    @PostMapping()
    public Response<EmployeeVO> getUser(@RequestBody AuthData authData) {
        Response<EmployeeVO> response = new Response<>();
        EmployeeVO employee;
        try {
            employee = employeeService.findUserByUsername(authData.getLogin());
        } catch (Exception e) {
            response.setStatus("error");
            response.setData(null);
            response.setMsg("invalid user or password");
            return response;
        }
        if (employee.getPassword().equals((authData.getPassword()))) {
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

    @DeleteMapping()
    public Response<Boolean> unsetSession() {
        Response<Boolean> response = new Response<>();
        httpSession.invalidate();
        response.setData(true);
        response.setStatus("200");
        response.setMsg("success");

        return response;
    }
}
