package com.exadel.ehitchhiking.Controllers;

import com.exadel.ehitchhiking.Services.impl.TripDriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Timestamp;

@RestController
@RequestMapping("/TripDriver")
public class TripDriverController {

    @Autowired
    private TripDriverService tripDriverService;

    @PostMapping("/createTrip")
    public void createTrip(String startingPoint, String endingPoint,
                           Timestamp startingTime, Timestamp endingTime,
                           String idOfCar, String seats) {
        try {
            tripDriverService.createTripDriver(startingPoint, endingPoint,
                    startingTime, endingTime,
                    Integer.getInteger(idOfCar), Integer.getInteger(seats));
        } catch (Exception e) {
            //TODO: return
        }
    }

    @PutMapping("/updateStartingPlace")
    public void updateStartingPlace(String tripId, String number) {
        try {
            tripDriverService.updatePointStart(Integer.getInteger(tripId), number);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }


    @PutMapping("/updateEndingPlace")
    public void updateEndingPlace(String tripId, String number) {
        try {
            tripDriverService.updatePointEnd(Integer.getInteger(tripId), number);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/updateStartingTime")
    public void updateStartingTime(String tripId, Timestamp timeStart) {
        try {
            tripDriverService.updateTimeStart(Integer.getInteger(tripId), timeStart);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/updateEndingTime")
    public void updateEndingTime(String tripId, Timestamp timeEnd) {
        try {
            tripDriverService.updateTimeStart(Integer.getInteger(tripId), timeEnd);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/updateSeats")
    public void updateSeats(String tripId, String seats) {
        try {
            tripDriverService.updateSeats(Integer.getInteger(tripId), Integer.getInteger(seats));
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/addToSaved")
    public void addToSaved(String tripId) {
        try {
            tripDriverService.updateSave(Integer.getInteger(tripId), true);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/removeFromSaved")
    public void removedFromSaved(String tripId) {
        try {
            tripDriverService.updateSave(Integer.getInteger(tripId), false);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/addToHistory")
    public void addToHistory(String tripId) {
        try {
            tripDriverService.updateHistory(Integer.getInteger(tripId), true);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/cancelledTrip")
    public void addToCancelled(String tripId) {
        try {
            tripDriverService.updateFinished(Integer.getInteger(tripId), false);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/finishedTrip")
    public void addToFinished(String tripId) {
        try {
            tripDriverService.updateFinished(Integer.getInteger(tripId), true);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/changeCar")
    public void changeCar(String tripId, String newCarId) {
        try {
            tripDriverService.updateCar(Integer.getInteger(tripId), Integer.getInteger(newCarId));
        } catch (Exception e) {
        }
    }
}

