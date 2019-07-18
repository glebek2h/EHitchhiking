package com.exadel.ehitchhiking.Controllers;


import com.exadel.ehitchhiking.Services.TripPassengerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Timestamp;

@RestController
public class TripPassengerController {

    @Autowired
    TripPassengerService tripPassengerService = new TripPassengerService();


    @PostMapping("/TripDriver/createTrip")
    public void createTrip(int pass_id, String startingPoint, String endingPoint,
                           Timestamp startingTime, Timestamp endingTime,
                           int seats, int tripDriverId) {
        try {
            tripPassengerService.createTripPassenger(pass_id, startingPoint, endingPoint,
                    startingTime, endingTime,
                    seats, tripDriverId);
        } catch (Exception e) {
            //TODO: return
        }
    }

    @PutMapping("/TripPassenger/updateStartingPlace")
    public void updateStartingPlace(int tripId, String number) {
        try {
            tripPassengerService.updatePointStart(tripId, number);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }


    @PutMapping("/TripPassenger/updateEndingPlace")
    public void updateEndingPlace(int tripId, String number) {
        try {
            tripPassengerService.updatePointEnd(tripId, number);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/TripPassenger/updateStartingTime")
    public void updateStartingTime(int tripId, Timestamp timeStart) {
        try {
            tripPassengerService.updateTimeStart(tripId, timeStart);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/TripPassenger/updateEndingTime")
    public void updateEndingTime(int tripId, Timestamp timeEnd) {
        try {
            tripPassengerService.updateTimeStart(tripId, timeEnd);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/TripPassenger/updateSeats")
    public void updateSeats(int tripId, int seats) {
        try {
            tripPassengerService.updateSeats(tripId, seats);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/TripPassenger/addToSaved")
    public void addToSaved(int tripId) {
        try {
            tripPassengerService.updateSave(tripId, true);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/TripPassenger/removeFromSaved")
    public void removedFromSaved(int tripId) {
        try {
            tripPassengerService.updateSave(tripId, false);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/TripPassenger/addToHistory")
    public void addToHistory(int tripId) {
        try {
            tripPassengerService.updateHistory(tripId, true);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/TripPassenger/cancelledTrip")
    public void addToCancelled(int tripId) {
        try {
            tripPassengerService.updateFinished(tripId, false);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }


    @PutMapping("/TripPassenger/finishedTrip")
    public void addToFinished(int tripId) {
        try {
            tripPassengerService.updateFinished(tripId, true);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

}