package com.exadel.ehitchhiking.authentification;

import com.exadel.ehitchhiking.models.Employee;
import com.exadel.ehitchhiking.models.vo.EmployeeVO;
import com.exadel.ehitchhiking.responses.Response;
import com.exadel.ehitchhiking.services.IEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.web.session.HttpSessionEventPublisher;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

@RestController
@RequestMapping("/initApp")
public class SessionController {

    @Autowired
    private HttpSession httpSession;

    @Autowired
    private IEmployeeService employeeService;

    @GetMapping
    private Response<EmployeeVO> getSession() {
        System.out.println("here");
        Response<EmployeeVO> response = new Response<>();

        if (httpSession.isNew()) {
            System.out.println("new session");
            response.setData(null);
            response.setStatus("success");
            response.setMsg("new session");
            httpSession.invalidate();
            return response;
        }

        System.out.println("old session");
        response.setStatus("success");
        response.setMsg("old session");
        response.setData(employeeService.findUserId(1));
        //response.setData(null);

        return response;
    }
}
