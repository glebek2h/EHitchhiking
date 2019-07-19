package com.exadel.ehitchhiking.Controllers;

import com.exadel.ehitchhiking.Services.IBlackListDriverService;
import com.exadel.ehitchhiking.Services.IBlackListPassengerService;
import com.exadel.ehitchhiking.Services.impl.BlackListDriverService;
import com.exadel.ehitchhiking.Services.impl.BlackListPassengerService;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/BlackList")
public class BlackListsController {

    @Autowired
    private IBlackListDriverService blackListDriverService;

    @Autowired
    private IBlackListPassengerService blackListPassengerService;

    @PostMapping("/Driver")
    public boolean addPassToBlackListDriver(String idDriver, String idPass) {
            blackListDriverService.addPass(Integer.getInteger(idDriver), Integer.getInteger(idPass));
        try {
            //hm...
        } catch (Exception e) {
            return false;
        }
        return true;

    }

    // deleting the passenger from the balck list driver
    @DeleteMapping("/Driver")
    public boolean deletePassFromBlackListDriver(String idDriver, String idPass) {
            blackListDriverService.deletePass(Integer.getInteger(idDriver), Integer.getInteger(idPass));
        try {
            //hm...
        } catch (Exception e) {
            return false;
        }
        return true;
    }


    // adding the passenger to the black list of the driver
    @PostMapping("/Passenger")
    public boolean addDriverToBlackListPass(String idPass, String idDriver) {
        try {
            blackListPassengerService.addPass(Integer.getInteger(idPass), Integer.getInteger(idDriver));
        } catch (Exception e) {
            return false;
        }
        return true;
    }

    // deleting the passenger from the balck list driver
    @DeleteMapping("/Passenger")
    public boolean deleteDriverFromBlackListPass(String idPass, String idDriver) {
        try {
            blackListPassengerService.deletePass(Integer.getInteger(idPass), Integer.getInteger(idDriver));
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
