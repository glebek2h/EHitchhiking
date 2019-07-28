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

            tripDriverService.createTripDriver(tripDriver.getStartingPoint(), tripDriver.getEndingPoint(),
                    Timestamp.valueOf(tripDriver.getStartingTime()), Timestamp.valueOf(tripDriver.getEndingTime()),
                    Integer.parseInt(tripDriver.getIdOfCar()),
                    Integer.parseInt(tripDriver.getSeats()));
            response.setStatus("200");
            response.setData("true");
            return response;
        }
        catch (Exception e){
            response.setStatus("500");
            response.setData("false");
            return response;}
    }


    @PutMapping("/updateTrip")
    public Response<String> updateTrip(@RequestBody RequestTripDriver tripDriver){
        Response<String> response = new Response<>();
        try {
            int tripId = Integer.parseInt(tripDriver.getId());
            tripDriverService.updatePointStart(tripId, tripDriver.getStartingPoint());
            tripDriverService.updatePointEnd(tripId, tripDriver.getEndingPoint());
            tripDriverService.updateTimeStart(tripId, Timestamp.valueOf(tripDriver.getStartingTime()));
            tripDriverService.updateSeats(tripId, Integer.parseInt(tripDriver.getSeats()));
            tripDriverService.updateCar(tripId, Integer.parseInt(tripDriver.getIdOfCar()));
        response.setStatus("200");
        response.setData("true");
        return response;
    }
        catch (Exception e){
        response.setStatus("500");
        response.setData("false");
        return response;}
    }

    @PutMapping("/addToSaved")
    public Response<String> addToSaved(@RequestBody RequestTripDriver tripDriver) {
        Response<String> response = new Response<>();
        try {
            tripDriverService.updateSave(Integer.parseInt(tripDriver.getId()), true);
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
            tripDriverService.updateSave(Integer.parseInt(tripDriver.getId()), false);
            response.setStatus("200");
            response.setData("true");
            return response;
        }
        catch (Exception e){
            response.setStatus("500");
            response.setData("false");
            return response;}
    }

    @PutMapping("/addToHistory")
    public Response<String> addToHistory(@RequestBody RequestTripDriver tripDriver) {
        Response<String> response = new Response<>();
        try {
            tripDriverService.updateHistory(Integer.parseInt(tripDriver.getId()), true);
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
            tripDriverService.updateFinished(Integer.parseInt(tripDriver.getId()), false);
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
            tripDriverService.updateFinished(Integer.parseInt(tripDriver.getId()), true);
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

