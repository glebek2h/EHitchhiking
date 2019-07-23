package com.exadel.ehitchhiking.Controllers;


import com.exadel.ehitchhiking.Services.ITripPassengerService;
import com.exadel.ehitchhiking.Services.impl.TripPassengerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Timestamp;

@RestController
@RequestMapping("/TripPassenger")
public class TripPassengerController {

    @Autowired
    private ITripPassengerService tripPassengerService;

    @PostMapping("/createTrip")
    public void createTrip(String passId, String startingPoint, String endingPoint,
                           Timestamp startingTime, Timestamp endingTime,
                           String seats, String tripDriverId) {
        try {
            tripPassengerService.createTripPassenger(Integer.getInteger(passId), startingPoint, endingPoint,
                    startingTime, endingTime,
                    Integer.getInteger(seats), Integer.getInteger(tripDriverId));
        } catch (Exception e) {
            //TODO: return
        }
    }

    @PutMapping("/updateStartingPlace")
    public void updateStartingPlace(String tripId, String number) {
        try {
            tripPassengerService.updatePointStart(Integer.getInteger(tripId), number);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/updateEndingPlace")
    public void updateEndingPlace(String tripId, String number) {
        try {
            tripPassengerService.updatePointEnd(Integer.getInteger(tripId), number);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/updateStartingTime")
    public void updateStartingTime(String tripId, Timestamp timeStart) {
        try {
            tripPassengerService.updateTimeStart(Integer.getInteger(tripId), timeStart);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/updateEndingTime")
    public void updateEndingTime(String tripId, Timestamp timeEnd) {
        try {
            tripPassengerService.updateTimeStart(Integer.getInteger(tripId), timeEnd);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/updateSeats")
    public void updateSeats(String tripId, String seats) {
        try {
            tripPassengerService.updateSeats(Integer.getInteger(tripId), Integer.getInteger(seats));
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/addToSaved")
    public void addToSaved(String tripId) {
        try {
            tripPassengerService.updateSave(Integer.getInteger(tripId), true);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/removeFromSaved")
    public void removedFromSaved(String tripId) {
        try {
            tripPassengerService.updateSave(Integer.getInteger(tripId), false);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/cancelledTrip")
    public void addToCancelled(String tripId) {
        try {
            tripPassengerService.updateFinished(Integer.getInteger(tripId), false);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/finishedTrip")
    public void addToFinished(String tripId) {
        try {
            tripPassengerService.updateFinished(Integer.getInteger(tripId), true);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }
}