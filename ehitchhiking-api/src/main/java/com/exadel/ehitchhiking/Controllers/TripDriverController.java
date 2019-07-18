package com.exadel.ehitchhiking.Controllers;

import com.exadel.ehitchhiking.Services.TripDriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Timestamp;

@RestController
public class TripDriverController {

    @Autowired
    TripDriverService tripDriverService = new TripDriverService();



    @PostMapping("/TripDriver/createTrip")
    public void createTrip(String startingPoint, String endingPoint,
                           Timestamp startingTime, Timestamp endingTime,
                           int id_of_car, int seats){
        try{
            tripDriverService.createTripDriver(startingPoint, endingPoint,
                     startingTime, endingTime,
             id_of_car, seats);
        }
        catch(Exception e){
            //TODO: return
        }
    }


    @PutMapping("/TripDriver/updateStartingPlace")
    public void updateStartingPlace(int tripId, String number) {
        try {
            tripDriverService.updatePointStart(tripId, number);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }


    @PutMapping("/TripDriver/updateEndingPlace")
    public void updateEndingPlace(int tripId, String number) {
        try {
            tripDriverService.updatePointEnd(tripId, number);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/TripDriver/updateStartingTime")
    public void updateStartingTime(int tripId, Timestamp timeStart) {
        try {
            tripDriverService.updateTimeStart(tripId, timeStart);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/TripDriver/updateEndingTime")
    public void updateEndingTime(int tripId, Timestamp timeEnd) {
        try {
            tripDriverService.updateTimeStart(tripId, timeEnd);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/TripDriver/updateSeats")
    public void updateSeats(int tripId, int seats) {
        try {
            tripDriverService.updateSeats(tripId, seats);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/TripDriver/addToSaved")
    public void addToSaved(int tripId) {
        try {
            tripDriverService.updateSave(tripId, true);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/TripDriver/removeFromSaved")
    public void removedFromSaved(int tripId) {
        try {
            tripDriverService.updateSave(tripId, false);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/TripDriver/addToHistory")
    public void addToHistory(int tripId) {
        try {
            tripDriverService.updateHistory(tripId, true);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/TripDriver/cancelledTrip")
    public void addToCancelled(int tripId) {
        try {
            tripDriverService.updateFinished(tripId, false);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }


    @PutMapping("/TripDriver/finishedTrip")
    public void addToFinished(int tripId) {
        try {
            tripDriverService.updateFinished(tripId, true);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }


    @PutMapping("/TripDriver/changeCar")
    public void changeCar(int tripId, int newCarId) {
        try {
            tripDriverService.updateCar(tripId, newCarId);
        } catch (Exception e) {
        }
    }
}

