/*package com.exadel;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerMapping {

    @GetMapping("/go")
    public String go(@RequestParam(name="name", required=false, defaultValue="World" ) String name, Model model) {
        model.addAttribute("name", name);
        return "go";
    }

    @GetMapping("/")
    public String main(@RequestParam(name="name", required = false, defaultValue = "Main") String name, Model model){
        model.addAttribute("name", name);
        return "main";
    }
}*/
