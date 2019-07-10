package com.exadel;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Map;

@Controller
@RequestMapping("/test")
public class ControllerMapping {

    @GetMapping("/go")
    public String go(@RequestParam(required = false) Map<String, String> params, Model model) {
        model.addAttribute("name", params.get("name"));
        model.addAttribute("option", params.get("option"));
        return "go";
    }

    @GetMapping("/main")
    public String main(@RequestParam(required = false) String name, Model model){
        model.addAttribute("name", name);
        return "main";
    }
}