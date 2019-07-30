package com.exadel.ehitchhiking.controllers;


import com.exadel.ehitchhiking.models.TripDriver;
import com.exadel.ehitchhiking.models.vo.TripDriverVO;
import com.exadel.ehitchhiking.requests.RequestTripPassenger;
import com.exadel.ehitchhiking.responses.Response;
import com.exadel.ehitchhiking.responses.ResponseMany;
import com.exadel.ehitchhiking.services.ITripDriverService;
import com.exadel.ehitchhiking.services.ITripPassengerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.geo.Point;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;

@RestController
@RequestMapping("/tripPassenger")
public class TripPassengerController {

    @Autowired
    private ITripPassengerService tripPassengerService;
    @Autowired
    private ITripDriverService tripDriverService;

    @PostMapping("/createTrip")
    public Response<String> createTrip(@RequestBody RequestTripPassenger tripPassenger) {
        Response<String> response = new Response<>();
        try {
            // we are checking if the number of seats that the passenger wants to have is smaller or equal to the number of available seats on that trip
            if (tripDriverService.getAvailableSeats(tripPassenger.getIdTripDriver()) >= tripPassenger.getSeats()){

                // newSeats is the new number seats available o this trip
                int newSeats = tripDriverService.getAvailableSeats(tripPassenger.getIdTripDriver()) - tripPassenger.getSeats();
                tripDriverService.updateSeats(tripPassenger.getIdTripDriver(), newSeats);
                tripPassengerService.createTripPassenger(tripPassenger.getPassId(),
                        tripPassenger.getStartingPoint(), tripPassenger.getEndingPoint(),
                        tripPassenger.getStartingTime(),
                        tripPassenger.getEndingTime(),
                        tripPassenger.getSeats(),
                        tripPassenger.getIdTripDriver(),
                        tripPassenger.getCoordStart(), tripPassenger.getCoordEnd(), tripPassenger.getDistance());
                response.setStatus("200");
                response.setData("true");
                return response;}
            else{
                response.setStatus("500");
                response.setData("false");
                return response;
            }

        } catch (Exception e) {
            response.setStatus("500");
            response.setData("false");
            return response;}
    }


    @PutMapping("/updateTrip")
    public Response<String> updateTrip(@RequestBody RequestTripPassenger tripPass){
        Response<String> response = new Response<>();
        try {
            int tripId = tripPass.getId();
            tripPassengerService.updateTrip(tripId, tripPass.getStartingTime(), tripPass.getEndingTime(),
                    tripPass.getStartingPoint(), tripPass.getEndingPoint(), tripPass.getSeats(),
                    tripPass.getCoordStart(), tripPass.getCoordEnd(), tripPass.getDistance());

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
    public Response<String> addToHistory(@RequestBody RequestTripPassenger tripPass) {
        Response<String> response = new Response<>();
        try {
            tripPassengerService.updateHistory(tripPass.getId(), true);
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
    public Response<String> removeFromHistory(@RequestBody RequestTripPassenger tripPass) {
        Response<String> response = new Response<>();
        try {
            tripPassengerService.updateHistory(tripPass.getId(), false);
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
    public Response<String> addToCancelled(@RequestBody RequestTripPassenger tripPass) {
        Response<String> response = new Response<>();
        try {
            tripPassengerService.updateFinished(tripPass.getId(), false);
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
    public Response<String> addToFinished(@RequestBody RequestTripPassenger tripPass) {
        Response<String> response = new Response<>();
        try {
            tripPassengerService.updateFinished(tripPass.getId(), true);
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
    public Response<String> addToSaved( @RequestBody RequestTripPassenger tripPass) {
        Response<String> response = new Response<>();
        try {
            tripPassengerService.updateSave(tripPass.getId(), true);
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
    public Response<String> removedFromSaved(@RequestBody RequestTripPassenger tripPass) {
        Response<String> response = new Response<>();
        try {
            tripPassengerService.updateSave(tripPass.getId(), false);
            response.setStatus("200");
            response.setData("true");
            return response;
        }
        catch (Exception e){
            response.setStatus("500");
            response.setData("false");
            return response;}
    }


    @GetMapping("/getAllDriverTrips")
    public ResponseMany<TripDriverVO> getAllAvailableTrips(Timestamp startingTime, Timestamp endingTime, int seats,
                                                           Point coordStart, Point coordEnd){
        ResponseMany<TripDriverVO> responseMany = new ResponseMany<>();
        try{
            responseMany.setStatus("200");
            responseMany.setData(tripDriverService.getAll(startingTime, endingTime,  seats,
            coordStart, coordEnd));
            return responseMany;
        }
        catch(Exception e){

            responseMany.setStatus("500");
            responseMany.setData(null);
            return responseMany;

        }
    }

    @PutMapping("/active")
    public Response<String> addToActive(@RequestBody RequestTripPassenger tripPass) {
        Response<String> response = new Response<>();
        try {
            tripDriverService.updateActive(tripPass.getId(), true);
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
    public Response<String> removeFromActive(@RequestBody RequestTripPassenger tripPass) {
        Response<String> response = new Response<>();
        try {
            tripDriverService.updateActive(tripPass.getId(),  false);
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