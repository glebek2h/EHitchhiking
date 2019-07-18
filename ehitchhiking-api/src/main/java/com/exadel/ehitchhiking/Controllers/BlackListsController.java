package com.exadel.ehitchhiking.Controllers;

import com.exadel.ehitchhiking.Models.Passenger;
import com.exadel.ehitchhiking.Services.BlackListDriverService;
import com.exadel.ehitchhiking.Services.BlackListPassengerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Array;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping(value = "/BlackList")
public class BlackListsController {

    @Autowired
    BlackListDriverService blackListDriverService = new BlackListDriverService();
    @Autowired
    BlackListPassengerService blackListPassengerService = new BlackListPassengerService();

    // adding the passenger to the black list of the driver
    @PostMapping("/Driver")
    public boolean addPassToBlackListDriver (int idDriver, int idPass){
        try {
            blackListDriverService.addPass(idDriver, idPass);
        }
        catch (Exception e){return false;}
        return true;

    }

    // deleting the passenger from the balck list driver
    @DeleteMapping("/Driver")
    public boolean deletePassFromBlackListDriver (int idDriver, int idPass){
        try {
            blackListDriverService.deletePass(idDriver, idPass);
        }
        catch (Exception e){return false;}
        return true;
    }


    // adding the passenger to the black list of the driver
    @PostMapping("/Passenger")
    public boolean addDriverToBlackListPass (int idPass, int idDriver){
        try{
        blackListDriverService.addPass(idPass, idDriver);}
        catch (Exception e){
            return false;
        }
        return true;
    }

    // deleting the passenger from the balck list driver
    @DeleteMapping("/Passenger")
    public boolean deleteDriverFromBlackListPass (int idPass, int idDriver){
        try {blackListDriverService.deletePass(idPass, idDriver);}
        catch (Exception e){
            return false;
        }
        return true;
    }

    @GetMapping("/Driver")
    public Object[] getListOfPassengers(int idDriver){
        try{
        return blackListDriverService.findAllPass(idDriver).toArray();}
        catch (Exception e){return null;}
    }

    @GetMapping("/Passenger")
    public Object[] getListOfDrivers(int idPass){
        try{
        return blackListPassengerService.findAllDrivers(idPass).toArray();}
        catch(Exception e) {return null;}
    }

    @GetMapping("/test")
    public String test(){
        return "ok";
    }

}