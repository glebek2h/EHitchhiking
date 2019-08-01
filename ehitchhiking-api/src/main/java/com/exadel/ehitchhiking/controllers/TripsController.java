package com.exadel.ehitchhiking.controllers;


import com.exadel.ehitchhiking.models.vo.TripsActiveVO;
import com.exadel.ehitchhiking.models.vo.TripsHistoryVO;
import com.exadel.ehitchhiking.responses.Response;
import com.exadel.ehitchhiking.services.ITripsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/trips")
public class TripsController {


    @Autowired
    private ITripsService trips;

    @GetMapping("/history")
    public Response getHistory(String id) {
        List<TripsHistoryVO> list;
        try {

            list = trips.getAllHistory(Integer.parseInt(id));

        } catch (Exception e) {
            return Response.setError("error");
        }
        return Response.setSuccess(list, "Successfully got history");
    }

    @DeleteMapping("/history")
    public Response refreshHistory(String id) {
        try {
            trips.refreshHistory(Integer.parseInt(id));
        } catch (Exception e) {
            return Response.setError("error");
        }
        return Response.setSuccess("true", "Successfully refresh history");

    }

    @GetMapping("/active")
    public Response getActive(String id) {
        List<TripsActiveVO> list;
        try {
            list = trips.getAllActive(Integer.parseInt(id));
        } catch (Exception e) {
            return Response.setError("error");
        }
        return Response.setSuccess(list, "Successfully got active");
    }
}