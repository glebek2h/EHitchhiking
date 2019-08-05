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
            return Response.setError("error");
        }
        return Response.setSuccess("true", "Success");
    }


    @PutMapping("/update_trip")
    public Response updateTrip(@RequestBody RequestTripDriver tripDriver) {
        try {
            tripDriverService.updateTrip(tripDriver.getId(), tripDriver.getStartingTime(),
                    tripDriver.getEndingTime(), tripDriver.getStartingPoint(), tripDriver.getEndingPoint(),
                    tripDriver.getSeats(), tripDriver.getIdOfCar(), tripDriver.getCoordStart(), tripDriver.getCoordEnd(),
                    tripDriver.getDistance());
        } catch (Exception e) {
            return Response.setError("error");
        }
        return Response.setSuccess("true", "Success");
    }

    @PutMapping("/save")
    public Response addToSaved(@RequestBody RequestTripDriver trip) {
        TripDriverVO updatedTrip = null;
        try {
            updatedTrip = tripDriverService.updateSave(trip.getId(), true);
        } catch (Exception e) {
            return Response.setError("error");
        }
        return Response.setSuccess(updatedTrip, "Success");

    }

    @PutMapping("/removeFromSaved")
    public Response removeFromSaved(@RequestBody RequestTripDriver trip) {
        TripDriverVO updatedTrip = null;
        try {
            updatedTrip = tripDriverService.updateSave(trip.getId(), false);
        } catch (Exception e) {
            return Response.setError("error");
        }
        return Response.setSuccess(updatedTrip, "Success");

    }

    @PutMapping("/remove_from_history")
    public Response deleteFromHistory(@RequestBody RequestTripDriver tripDriver) {
        try {
            tripDriverService.deleteFromHistory(tripDriver.getId(), false);
        } catch (Exception e) {
            return Response.setError("error");
        }
        return Response.setSuccess("true", "Success");
    }

    @PutMapping("/cancelled_trip")
    public Response addToCancelled(@RequestBody RequestTripDriver tripDriver) {
        try {
            tripDriverService.updateFinished(tripDriver.getId(), false);
        } catch (Exception e) {
            return Response.setError("error");
        }
        return Response.setSuccess("true", "Success");
    }

    @PutMapping("/finished_trip")
    public Response addToFinished(@RequestBody RequestTripDriver tripDriver) {
        try {
            tripDriverService.updateFinished(tripDriver.getId(), true);
        } catch (Exception e) {
            return Response.setError("error");
        }
        return Response.setSuccess("true", "Success");
    }

    @PutMapping("/active")
    public Response addToActive(@RequestBody RequestTripDriver tripDriver) {
        try {
            tripDriverService.updateActive(tripDriver.getId(), true);
        } catch (Exception e) {
            return Response.setError("error");
        }
        return Response.setSuccess("true", "Success");
    }


    @PutMapping("/remove_from_active")
    public Response removeFromActive(@RequestBody RequestTripDriver tripDriver) {
        try {
            tripDriverService.updateActive(tripDriver.getId(), false);
        } catch (Exception e) {
            System.out.println(e);
            return Response.setError("error");
        }
        return Response.setSuccess("true", "Success");
    }

}

