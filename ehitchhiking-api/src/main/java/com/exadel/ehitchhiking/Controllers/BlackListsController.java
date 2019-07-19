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
    public boolean addPassToBlackListDriver(String idDriver, String idPass) {
        try {
            System.out.println(idDriver);
            blackListDriverService.addPass(Integer.getInteger(idDriver), Integer.getInteger(idPass));
        } catch (Exception e) {
            return false;
        }
        return true;

    }

    // deleting the passenger from the balck list driver
    @DeleteMapping("/Driver")
    public boolean deletePassFromBlackListDriver(String idDriver, String idPass) {
        try {
            blackListDriverService.deletePass(Integer.getInteger(idDriver), Integer.getInteger(idPass));
        } catch (Exception e) {
            return false;
        }
        return true;
    }


    // adding the passenger to the black list of the driver
    @PostMapping("/Passenger")
    public boolean addDriverToBlackListPass(String idPass, String idDriver) {
        try {
            blackListDriverService.addPass(Integer.getInteger(idPass), Integer.getInteger(idDriver));
        } catch (Exception e) {
            return false;
        }
        return true;
    }

    // deleting the passenger from the balck list driver
    @DeleteMapping("/Passenger")
    public boolean deleteDriverFromBlackListPass(String idPass, String idDriver) {
        try {
            blackListDriverService.deletePass(Integer.getInteger(idPass), Integer.getInteger(idDriver));
        } catch (Exception e) {
            return false;
        }
        return true;
    }

    /*@GetMapping("/Driver")
    public Object[] getListOfPassengers(String idDriver) {
        try {
          //  return blackListDriverService.findAllPass(Integer.getInteger(idDriver)).toArray();
        } catch (Exception e) {
            return null;
        }
    }*/

    /*@GetMapping("/Passenger")
    public Object[] getListOfDrivers(String idPass) {
        try {
          //  return blackListPassengerService.findAllDrivers(Integer.getInteger(idPass)).toArray();
        } catch (Exception e) {
            return null;
        }
    }*/
}
