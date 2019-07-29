package com.exadel.ehitchhiking.controllers;

import com.exadel.ehitchhiking.models.vo.EmployeeVO;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping("/api/currentUser")
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
