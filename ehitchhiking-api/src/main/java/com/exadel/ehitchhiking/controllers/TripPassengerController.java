package com.exadel.ehitchhiking.controllers;

import com.exadel.ehitchhiking.models.vo.TripDriverVO;
import com.exadel.ehitchhiking.requests.RequestTripPassenger;
import com.exadel.ehitchhiking.responses.Response;
import com.exadel.ehitchhiking.services.ITripDriverService;
import com.exadel.ehitchhiking.services.ITripPassengerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tripPassenger")
public class TripPassengerController {

    @Autowired
    private ITripPassengerService tripPassengerService;
    @Autowired
    private ITripDriverService tripDriverService;

    @PostMapping("/createTrip")
    public Response createTrip(@RequestBody RequestTripPassenger tripPassenger) {
        try {
            // we are checking if the number of seats that the passenger wants to have is smaller or equal to the number of available seats on that trip
            if (tripDriverService.getAvailableSeats(tripPassenger.getIdTripDriver()) >= tripPassenger.getSeats()) {

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

            } else {
                return Response.setError("no available seats");
            }
        } catch (Exception e) {
            return Response.setError("error");
        }
        return Response.setSuccess("true");
    }


    @PutMapping("/updateTrip")
    public Response updateTrip(@RequestBody RequestTripPassenger tripPass) {
        try {
            tripPassengerService.updateTrip(tripPass.getId(), tripPass.getStartingTime(), tripPass.getEndingTime(),
                    tripPass.getStartingPoint(), tripPass.getEndingPoint(), tripPass.getSeats(),
                    tripPass.getCoordStart(), tripPass.getCoordEnd(), tripPass.getDistance());
        } catch (Exception e) {
            return Response.setError("error");
        }
        return Response.setSuccess("true");
    }


    @PutMapping("/addToHistory")
    public Response addToHistory(@RequestBody RequestTripPassenger tripPass) {
        try {
            tripPassengerService.updateHistory(tripPass.getId(), true);
        } catch (Exception e) {
            return Response.setError("error");
        }
        return Response.setSuccess("true");
    }


    @PutMapping("/removeFromHistory")
    public Response removeFromHistory(@RequestBody RequestTripPassenger tripPass) {
        try {
            tripPassengerService.updateHistory(tripPass.getId(), false);
        } catch (Exception e) {
            return Response.setError("error");
        }
        return Response.setSuccess("true");
    }

    @PutMapping("/cancelledTrip")
    public Response addToCancelled(@RequestBody RequestTripPassenger tripPass) {
        try {
            tripPassengerService.updateFinished(tripPass.getId(), false);
        } catch (Exception e) {
            return Response.setError("error");
        }
        return Response.setSuccess("true");
    }

    @PutMapping("/finishedTrip")
    public Response addToFinished(@RequestBody RequestTripPassenger tripPass) {
        try {
            tripPassengerService.updateFinished(tripPass.getId(), true);
        } catch (Exception e) {
            return Response.setError("error");
        }
        return Response.setSuccess("true");
    }

    @PutMapping("/addToSaved")
    public Response addToSaved(@RequestBody RequestTripPassenger tripPass) {
        try {
            tripPassengerService.updateSave(tripPass.getId(), true);
        } catch (Exception e) {
            return Response.setError("error");
        }
        return Response.setSuccess("true");

    }

    @PutMapping("/removeFromSaved")
    public Response removedFromSaved(@RequestBody RequestTripPassenger tripPass) {
        try {
            tripPassengerService.updateSave(tripPass.getId(), false);
        } catch (Exception e) {
            return Response.setError("error");
        }
        return Response.setSuccess("true");
    }


    @PostMapping("/getAllDriverTrips")
    public Response getAllAvailableTrips(@RequestBody RequestTripPassenger tripPassenger) {
        List<TripDriverVO> tripDriverVOList;
        try {
            tripDriverVOList = tripDriverService.getAll(tripPassenger.getEmpId(), tripPassenger.getStartingTime(), tripPassenger.getEndingTime(), tripPassenger.getSeats(),
                    tripPassenger.getCoordStart(), tripPassenger.getCoordEnd());
        } catch (Exception e) {
            return Response.setError("error");
        }
        return Response.setSuccess(tripDriverVOList);
    }

    @PutMapping("/active")
    public Response addToActive(@RequestBody RequestTripPassenger tripPass) {
        try {
            tripDriverService.updateActive(tripPass.getId(), true);
        } catch (Exception e) {
            return Response.setError("error");
        }
        return Response.setSuccess("true");
    }


    @PutMapping("/removeFromActive")
    public Response removeFromActive(@RequestBody RequestTripPassenger tripPass) {
        try {
            tripDriverService.updateActive(tripPass.getId(), false);
        } catch (Exception e) {
            return Response.setError("error");
        }
        return Response.setSuccess("true");
    }
}