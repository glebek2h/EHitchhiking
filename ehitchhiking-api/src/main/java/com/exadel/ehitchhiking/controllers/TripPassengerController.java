package com.exadel.ehitchhiking.controllers;

import com.exadel.ehitchhiking.models.vo.TripDriverVO;
import com.exadel.ehitchhiking.models.vo.TripPassVO;
import com.exadel.ehitchhiking.requests.RequestTripPassenger;
import com.exadel.ehitchhiking.responses.Response;
import com.exadel.ehitchhiking.services.ITripDriverService;
import com.exadel.ehitchhiking.services.ITripPassengerService;
import com.exadel.ehitchhiking.services.mail.IEmailSender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/trip_passenger")
public class TripPassengerController {

    @Autowired
    private ITripPassengerService tripPassengerService;
    @Autowired
    private ITripDriverService tripDriverService;
    @Autowired
    private IEmailSender emailSender;

    @PostMapping
    public Response createTrip(@RequestBody RequestTripPassenger tripPassenger) {
        try {
            // we are checking if the number of seats that the passenger wants to have is smaller or equal to the number of available seats on that trip
            if (tripDriverService.getAvailableSeats(tripPassenger.getIdTripDriver()) >= tripPassenger.getSeats()) {

                // newSeats is the new number seats available o this trip
                int newSeats = tripDriverService.getAvailableSeats(tripPassenger.getIdTripDriver()) - tripPassenger.getSeats();
                tripDriverService.updateSeats(tripPassenger.getIdTripDriver(), newSeats);
                List<String> emailList = tripPassengerService.createTripPassenger(tripPassenger.getEmpId(),
                        tripPassenger.getStartingPoint(), tripPassenger.getEndingPoint(),
                        tripPassenger.getStartingTime(),
                        tripPassenger.getEndingTime(),
                        tripPassenger.getSeats(),
                        tripPassenger.getIdTripDriver(),
                        tripPassenger.getCoordStart(), tripPassenger.getCoordEnd(), tripPassenger.getDistance());


                emailSender.sendingEmail(emailList, "Created Trip", "The trip was created. To view the details, please, go to Ehitchhiking.com");
            }

            else {
                return Response.setError("no available seats");
            }


        } catch (Exception e) {
            return Response.setError("An error has occurred while creating the trip!");
        }
        return Response.setSuccess("true", "The trip was successfully created!");
    }


    @PutMapping("/update_trip")
    public Response updateTrip(@RequestBody RequestTripPassenger tripPass) {
        try {
            tripPassengerService.updateTrip(tripPass.getId(), tripPass.getStartingTime(), tripPass.getEndingTime(),
                    tripPass.getStartingPoint(), tripPass.getEndingPoint(), tripPass.getSeats(),
                    tripPass.getCoordStart(), tripPass.getCoordEnd(), tripPass.getDistance());
        } catch (Exception e) {
            return Response.setError("An error has occurred while updating the trip!");
        }
        return Response.setSuccess("true", "The trip was successfully updated!");
    }


    @PutMapping("/add_to_history")
    public Response addToHistory(@RequestBody RequestTripPassenger tripPass) {
        try {
            tripPassengerService.updateHistory(tripPass.getId(), true);
        } catch (Exception e) {
            return Response.setError("An error has occurred while adding the trip to history!");
        }
        return Response.setSuccess("true", "The trip was successfully added to history!");
    }


    @PutMapping("/remove_from_history")
    public Response removeFromHistory(@RequestBody RequestTripPassenger tripPass) {
        try {
            tripPassengerService.updateHistory(tripPass.getId(), false);
        } catch (Exception e) {
            return Response.setError("An error has occurred while removing the trip from history!");
        }
        return Response.setSuccess("true", "The trip was successfully removed from history!");
    }

    @PutMapping("/cancelled_trip")
    public Response addToCancelled(@RequestBody RequestTripPassenger tripPass) {
        try {
            List<String> emailList = tripPassengerService.updateFinished(tripPass.getId(), false);
            emailSender.sendingEmail(emailList, "Cancelled Trip", "The trip was cancelled. To view the details, please, go to Ehitchhiking.com");
        } catch (Exception e) {
            return Response.setError("An error has occurred while cancelling the trip!");
        }
        return Response.setSuccess("true", "The trip was successfully cancelled!");
    }

    @PutMapping("/finished_trip")
    public Response addToFinished(@RequestBody RequestTripPassenger tripPass) {
        try {
            List<String> emailList = tripPassengerService.updateFinished(tripPass.getId(), true);
            emailSender.sendingEmail(emailList, "Finished Trip", "The trip was finished. To view the details, please, go to Ehitchhiking.com");
        } catch (Exception e) {
            return Response.setError("An error has occurred while adding the trip to finished!");
        }
        return Response.setSuccess("true", "The trip was successfully added to finished!");
    }

    @PutMapping("/save")
    public Response addToSaved(@RequestBody RequestTripPassenger trip) {
        TripPassVO updatedTrip = null;
        try {
           updatedTrip = tripPassengerService.updateSave(trip.getId(), true);
        } catch (Exception e) {
            return Response.setError("An error has occurred while adding the trip to favorite!");
        }
        return Response.setSuccess(updatedTrip, "The trip was successfully added to favorite!");

    }

    @PutMapping("/removeFromSaved")
    public Response removedFromSaved(@RequestBody RequestTripPassenger trip) {
        TripPassVO updatedTrip = null;
        try {
            updatedTrip = tripPassengerService.updateSave(trip.getId(), false);
        } catch (Exception e) {
            return Response.setError("An error has occurred while removing the trip from favorite");
        }
        return Response.setSuccess(updatedTrip, "The trip was successfully removed from favorite!");
    }


    @PostMapping("/get_all_driver_trips")
    public Response getAllAvailableTrips(@RequestBody RequestTripPassenger tripPassenger) {
        List<TripDriverVO> tripDriverVOList;
        try {
            tripDriverVOList = tripDriverService.getAll(tripPassenger.getEmpId(), tripPassenger.getStartingTime(), tripPassenger.getEndingTime(), tripPassenger.getSeats(),
                    tripPassenger.getCoordStart(), tripPassenger.getCoordEnd());
        } catch (Exception e) {
            return Response.setError("An error has occurred while retrieving all trips!");
        }
        return Response.setSuccess(tripDriverVOList, "All trips were successfully retrieved!");
    }

    @PutMapping("/active")
    public Response addToActive(@RequestBody RequestTripPassenger tripPass) {
        try {
            tripDriverService.updateActive(tripPass.getId(), true);
        } catch (Exception e) {
            return Response.setError("An error has occurred while adding the trip to active!");
        }
        return Response.setSuccess("true", "The trip was successfully activated!");
    }


    @PutMapping("/remove_from_active")
    public Response removeFromActive(@RequestBody RequestTripPassenger tripPass) {
        try {
            tripPassengerService.updateActive(tripPass.getId(), false);
        } catch (Exception e) {
            return Response.setError("An error has occurred while removing the trip from active!");
        }
        return Response.setSuccess("true", "Successfully removed from active!");
    }
}