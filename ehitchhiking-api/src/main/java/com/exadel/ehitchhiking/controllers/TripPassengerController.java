package com.exadel.ehitchhiking.controllers;


import com.exadel.ehitchhiking.models.TripDriver;
import com.exadel.ehitchhiking.responses.ResponseMany;
import com.exadel.ehitchhiking.services.ITripDriverService;
import com.exadel.ehitchhiking.services.ITripPassengerService;
import org.springframework.beans.factory.annotation.Autowired;
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
    public void createTrip(String passId, String startingPoint, String endingPoint,
                           Timestamp startingTime, Timestamp endingTime,
                           String seats, String tripDriverId) {
        try {
            tripPassengerService.createTripPassenger(Integer.parseInt(passId), startingPoint, endingPoint,
                    startingTime, endingTime,
                    Integer.parseInt(seats), Integer.parseInt(tripDriverId));
        } catch (Exception e) {
            //TODO: return
        }
    }

    @PutMapping("/updateStartingPlace")
    public void updateStartingPlace(String tripId, String number) {
        try {
            tripPassengerService.updatePointStart(Integer.parseInt(tripId), number);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/updateEndingPlace")
    public void updateEndingPlace(String tripId, String number) {
        try {
            tripPassengerService.updatePointEnd(Integer.parseInt(tripId), number);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/updateStartingTime")
    public void updateStartingTime(String tripId, Timestamp timeStart) {
        try {
            tripPassengerService.updateTimeStart(Integer.parseInt(tripId), timeStart);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/updateEndingTime")
    public void updateEndingTime(String tripId, Timestamp timeEnd) {
        try {
            tripPassengerService.updateTimeStart(Integer.parseInt(tripId), timeEnd);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/updateSeats")
    public void updateSeats(String tripId, String seats) {
        try {
            tripPassengerService.updateSeats(Integer.parseInt(tripId), Integer.parseInt(seats));
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/addToSaved")
    public void addToSaved(String tripId) {
        try {
            tripPassengerService.updateSave(Integer.parseInt(tripId), true);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/removeFromSaved")
    public void removedFromSaved(String tripId) {
        try {
            tripPassengerService.updateSave(Integer.parseInt(tripId), false);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/cancelledTrip")
    public void addToCancelled(String tripId) {
        try {
            tripPassengerService.updateFinished(Integer.parseInt(tripId), false);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/finishedTrip")
    public void addToFinished(String tripId) {
        try {
            tripPassengerService.updateFinished(Integer.parseInt(tripId), true);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @GetMapping("/getAllDriverTrips")
    public ResponseMany<TripDriver> getAllAvailableTrips(){
        ResponseMany<TripDriver> responseMany = new ResponseMany<>();
        try{
            responseMany.setStatus("200");
            responseMany.setData(tripDriverService.getAll());
            return responseMany;

                    //TODO: check for the excstance of the getALLtrips
        }
        catch(Exception e){

            responseMany.setStatus("500");
            responseMany.setData(null);
            return responseMany;

        }
    }
}