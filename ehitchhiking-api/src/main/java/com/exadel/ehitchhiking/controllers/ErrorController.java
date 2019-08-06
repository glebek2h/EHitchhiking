package com.exadel.ehitchhiking.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

@RestController
@RequestMapping("/error")
public class ErrorController {

    @GetMapping("/redirect")
    public RedirectView Error(){
        return new RedirectView("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    }
}
