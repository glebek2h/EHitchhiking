package com.exadel.ehitchhiking.controllers;

import com.exadel.ehitchhiking.daos.impl.CarDAO;
import com.exadel.ehitchhiking.requests.RequestTripDriver;
import com.exadel.ehitchhiking.responses.Response;
import com.exadel.ehitchhiking.services.ITripDriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.sql.Timestamp;

@RestController
@RequestMapping("/tripDriver")
public class TripDriverController {

    @Autowired
    private ITripDriverService tripDriverService;
    @Autowired
    CarDAO carDAO;

    @PostMapping("/createTrip")
    public Response<String> addTripDriver(@RequestBody RequestTripDriver tripDriver){
        Response<String> response = new Response<>();
        try {
            System.out.println(tripDriver.getStartingTime());

            tripDriverService.createTripDriver(tripDriver.getStartingPoint(), tripDriver.getEndingPoint(),
                    tripDriver.getStartingTime(), tripDriver.getEndingTime(),
                    tripDriver.getIdOfCar(),
                    tripDriver.getSeats(), tripDriver.getCoordStart(), tripDriver.getCoordEnd(), tripDriver.getDistance());
            response.setStatus("200");
            response.setData("true");
            return response;
        }
        catch (Exception e){
            System.out.println(e);
            response.setStatus("500");
            response.setData("false");
            return response;}
    }


    @PutMapping("/updateTrip")
    public Response<String> updateTrip(@RequestBody RequestTripDriver tripDriver){
        Response<String> response = new Response<>();
        try {
            tripDriverService.updateTrip(tripDriver.getId(), tripDriver.getStartingTime(),
                    tripDriver.getEndingTime(), tripDriver.getStartingPoint(), tripDriver.getEndingPoint(),
                    tripDriver.getSeats(), tripDriver.getIdOfCar(), tripDriver.getCoordStart(), tripDriver.getCoordEnd(),
                    tripDriver.getDistance());
        response.setStatus("200");
        response.setData("true");
        return response;
    }
        catch (Exception e){
        response.setStatus("500");
        response.setData("false");
        return response;}
    }

    @PutMapping("/save")
    public Response<String> addToSaved(@RequestBody RequestTripDriver tripDriver) {
        Response<String> response = new Response<>();
        try {
            tripDriverService.updateSave(tripDriver.getId(), true);
            response.setStatus("200");
            response.setData("true");
            return response;
        }
        catch (Exception e){
            response.setStatus("500");
            response.setData("false");
            return response;}

    }

    @PutMapping("/removeFromSaved")
    public Response<String> removedFromSaved(@RequestBody RequestTripDriver tripDriver) {
        Response<String> response = new Response<>();
        try {
            tripDriverService.updateSave(tripDriver.getId(), false);
            response.setStatus("200");
            response.setData("true");
            return response;
        }
        catch (Exception e){
            response.setStatus("500");
            response.setData("false");
            return response;}
    }
    @PutMapping("/removeFromHistory")
    public Response<String> deleteFromHistory(@RequestBody RequestTripDriver tripDriver) {
        Response<String> response = new Response<>();
        try {
            tripDriverService.deleteFromHistory(tripDriver.getId(), false);
            response.setStatus("200");
            response.setData("true");
            return response;
        }
        catch (Exception e){
            response.setStatus("500");
            response.setData("false");
            return response;}
    }

    @PutMapping("/cancelledTrip")
    public Response<String> addToCancelled(@RequestBody RequestTripDriver tripDriver) {
        Response<String> response = new Response<>();
        try {
            tripDriverService.updateFinished(tripDriver.getId(), false);
            response.setStatus("200");
            response.setData("true");
            return response;
        }
        catch (Exception e){
            response.setStatus("500");
            response.setData("false");
            return response;}
    }

    @PutMapping("/finishedTrip")
    public Response<String> addToFinished(@RequestBody RequestTripDriver tripDriver) {
        Response<String> response = new Response<>();
        try {
            tripDriverService.updateFinished(tripDriver.getId(), true);
            response.setStatus("200");
            response.setData("true");
            return response;
        }
        catch (Exception e){
            response.setStatus("500");
            response.setData("false");
            return response;}
    }

    @PutMapping("/active")
    public Response<String> addToActive(@RequestBody RequestTripDriver tripDriver) {
        Response<String> response = new Response<>();
        try {
            tripDriverService.updateActive(tripDriver.getId(), true);
            response.setStatus("200");
            response.setData("true");
            return response;
        }
        catch (Exception e){
            response.setStatus("500");
            response.setData("false");
            return response;}
    }


    @PutMapping("/removeFromActive")
    public Response<String> removeFromActive(@RequestBody RequestTripDriver tripDriver) {
        Response<String> response = new Response<>();
        try {
            tripDriverService.updateActive(tripDriver.getId(),  false);
            response.setStatus("200");
            response.setData("true");
            return response;
        }
        catch (Exception e){
            response.setStatus("500");
            response.setData("false");
            return response;}
    }

}

