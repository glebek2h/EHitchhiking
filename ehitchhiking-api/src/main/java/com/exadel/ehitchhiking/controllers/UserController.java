package com.exadel.ehitchhiking.controllers;

import com.exadel.ehitchhiking.models.vo.EmployeeVO;
import org.omg.CORBA.portable.ApplicationException;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.ui.ModelMap;
import org.springframework.util.ClassUtils;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.security.Principal;


@RestController
@RequestMapping("/currentUser")
public class UserController {
    @GetMapping
    @PostMapping
    private EmployeeVO getCurrentUser(Principal principal) {
        EmployeeVO currentUser = null;
        if (principal != null) {
            currentUser = (EmployeeVO) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        }
        return currentUser;
    }
}
