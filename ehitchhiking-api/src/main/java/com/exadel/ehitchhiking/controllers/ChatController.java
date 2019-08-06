package com.exadel.ehitchhiking.controllers;


import com.exadel.ehitchhiking.responses.Response;
import com.exadel.ehitchhiking.services.IChatMessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/chat")
public class ChatController {

    @Autowired
    IChatMessageService chatMessageService;

    @GetMapping
    public Response getEmployee(Integer id) {
        List<Integer> list;
        try {
             list = chatMessageService.getChatInfo(id);
        } catch (Exception e) {
            System.out.println(e);
            return Response.setError("An error has occurred while retrieving the employee's info!");
        }
        return Response.setSuccess(list,"The employee info was successfully retrieved!");
    }
}
