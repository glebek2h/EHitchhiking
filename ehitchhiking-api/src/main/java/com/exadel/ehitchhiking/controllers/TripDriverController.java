package com.exadel.ehitchhiking.controllers;

import com.exadel.ehitchhiking.daos.impl.CarDAO;
import com.exadel.ehitchhiking.models.vo.TripDriverVO;
import com.exadel.ehitchhiking.requests.RequestTripDriver;
import com.exadel.ehitchhiking.responses.Response;
import com.exadel.ehitchhiking.services.ITripDriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.criteria.CriteriaBuilder;


@RestController
@RequestMapping("/trip_driver")
public class TripDriverController {

    @Autowired
    private ITripDriverService tripDriverService;
    @Autowired
    CarDAO carDAO;

    @PostMapping
    public Response addTripDriver(@RequestBody RequestTripDriver tripDriver) {
        try {

            tripDriverService.createTripDriver(tripDriver.getStartingPoint(), tripDriver.getEndingPoint(),
                    tripDriver.getStartingTime(), tripDriver.getEndingTime(),
                    tripDriver.getIdOfCar(),
                    tripDriver.getSeats(), tripDriver.getCoordStart(), tripDriver.getCoordEnd(), tripDriver.getDistance());
        } catch (Exception e) {
            return Response.setError("An error has occurred while creating the trip!");
        }
        return Response.setSuccess("true", "The trip was successfully created!");
    }


    @PutMapping("/update_trip")
    public Response updateTrip(@RequestBody RequestTripDriver tripDriver) {
        try {
            tripDriverService.updateTrip(tripDriver.getId(), tripDriver.getStartingTime(),
                    tripDriver.getEndingTime(), tripDriver.getStartingPoint(), tripDriver.getEndingPoint(),
                    tripDriver.getSeats(), tripDriver.getIdOfCar(), tripDriver.getCoordStart(), tripDriver.getCoordEnd(),
                    tripDriver.getDistance());
        } catch (Exception e) {
            return Response.setError("An error has occurred while updating the trip!");
        }
        return Response.setSuccess("true", "The trip was successfully updated!");
    }

    @PutMapping("/save")
    public Response addToSaved(@RequestBody RequestTripDriver trip) {
        TripDriverVO updatedTrip = null;
        try {
            updatedTrip = tripDriverService.updateSave(trip.getId(), true);
        } catch (Exception e) {
            return Response.setError("An error has occurred while adding the trip to favorite!");
        }
        return Response.setSuccess(updatedTrip, "The trip was successfully added to favorite!");

    }

    @PutMapping("/removeFromSaved")
    public Response removeFromSaved(@RequestBody RequestTripDriver trip) {
        TripDriverVO updatedTrip = null;
        try {
            updatedTrip = tripDriverService.updateSave(trip.getId(), false);
        } catch (Exception e) {
            return Response.setError("An error has occurred while removing the trip from favorite!");
        }
        return Response.setSuccess(updatedTrip, "The trip was successfully removed from favorite!");

    }

    @PutMapping("/remove_from_history")
    public Response deleteFromHistory(@RequestBody RequestTripDriver tripDriver) {
        try {
            tripDriverService.deleteFromHistory(tripDriver.getId(), false);
        } catch (Exception e) {
            return Response.setError("An error has occurred while removing the trip from history!");
        }
        return Response.setSuccess("true", "The trip was successfully removed from history!");
    }

    @PutMapping("/cancelled_trip")
    public Response addToCancelled(@RequestBody RequestTripDriver tripDriver) {
        try {
            tripDriverService.updateFinished(tripDriver.getId(), false);
        } catch (Exception e) {
            return Response.setError("An error has occurred while cancelling trip!");
        }
        return Response.setSuccess("true", "The trip was successfully cancelled!");
    }

    @PutMapping("/finished_trip")
    public Response addToFinished(@RequestBody RequestTripDriver tripDriver) {
        try {
            tripDriverService.updateFinished(tripDriver.getId(), true);
        } catch (Exception e) {
            return Response.setError("An error has occurred while adding trips from finished!");
        }
        return Response.setSuccess("true", "The trip was successfully finished!");
    }

    @PutMapping("/active")
    public Response addToActive(@RequestBody RequestTripDriver tripDriver) {
        try {
            tripDriverService.updateActive(tripDriver.getId(), true);
        } catch (Exception e) {
            return Response.setError("An error has occurred while adding the trip to active!");
        }
        return Response.setSuccess("true", "The trip was successfully added to active!");
    }


    @PutMapping("/remove_from_active")
    public Response removeFromActive(@RequestBody RequestTripDriver tripDriver) {
        try {
            tripDriverService.updateActive(tripDriver.getId(), false);
        } catch (Exception e) {
            return Response.setError("An error has occurred while removing the trip from active!");
        }
        return Response.setSuccess("true", "The trip was successfully removed from active!");
    }

}

