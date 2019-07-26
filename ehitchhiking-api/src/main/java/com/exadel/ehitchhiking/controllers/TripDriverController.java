package com.exadel.ehitchhiking.controllers;

import com.exadel.ehitchhiking.models.vo.TripDriverVO;
import com.exadel.ehitchhiking.responses.Response;
import com.exadel.ehitchhiking.services.ITripDriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.sql.Timestamp;

@RestController
@RequestMapping("/tripDriver")
public class TripDriverController {

    @Autowired
    private ITripDriverService tripDriverService;

    @PostMapping("/createTrip")
    public Response<String> createTrip(@RequestBody TripDriverVO tripDriverVO) {



        Response<String> response = new Response<>();

        try {

            tripDriverService.createTripDriver(tripDriverVO.getStartingPoint(), tripDriverVO.getEndingPoint(),
                    Timestamp.from(tripDriverVO.getStartingTime()), Timestamp.from(tripDriverVO.getEndingTime()),
                    tripDriverVO.getIdOfCar(), tripDriverVO.getSeats());
        } catch (Exception e) {
            response.setStatus("500");
            response.setData("false");
            return response;
        }
        response.setStatus("200");
        response.setData("true");
        return response;
    }

    @PutMapping("/updateStartingPlace")
    public void updateStartingPlace(String tripId, String number) {
        try {
            tripDriverService.updatePointStart(Integer.parseInt(tripId), number);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }


    @PutMapping("/updateEndingPlace")
    public void updateEndingPlace(String tripId, String number) {
        try {
            tripDriverService.updatePointEnd(Integer.parseInt(tripId), number);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/updateStartingTime")
    public void updateStartingTime(String tripId, Timestamp timeStart) {
        try {
            tripDriverService.updateTimeStart(Integer.parseInt(tripId), timeStart);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/updateEndingTime")
    public void updateEndingTime(String tripId, Timestamp timeEnd) {
        try {
            tripDriverService.updateTimeStart(Integer.parseInt(tripId), timeEnd);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/updateSeats")
    public void updateSeats(String tripId, String seats) {
        try {
            tripDriverService.updateSeats(Integer.parseInt(tripId), Integer.parseInt(seats));
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/addToSaved")
    public void addToSaved(String tripId) {
        try {
            tripDriverService.updateSave(Integer.parseInt(tripId), true);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/removeFromSaved")
    public void removedFromSaved(String tripId) {
        try {
            tripDriverService.updateSave(Integer.parseInt(tripId), false);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/addToHistory")
    public void addToHistory(String tripId) {
        try {
            tripDriverService.updateHistory(Integer.parseInt(tripId), true);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/cancelledTrip")
    public void addToCancelled(String tripId) {
        try {
            tripDriverService.updateFinished(Integer.parseInt(tripId), false);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/finishedTrip")
    public void addToFinished(String tripId) {
        try {
            tripDriverService.updateFinished(Integer.parseInt(tripId), true);
            //TODO: return
        } catch (Exception e) {
            //TODO: figure out the return
        }
    }

    @PutMapping("/changeCar")
    public void changeCar(String tripId, String newCarId) {
        try {
            tripDriverService.updateCar(Integer.parseInt(tripId), Integer.parseInt(newCarId));
        } catch (Exception e) {
        }
    }

}

