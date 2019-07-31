package com.exadel.ehitchhiking.controllers;

import com.exadel.ehitchhiking.models.vo.EmployeeVO;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

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
