package com.exadel.ehitchhiking.controllers;


import com.exadel.ehitchhiking.models.vo.TripsHistoryVO;
import com.exadel.ehitchhiking.responses.Response;
import com.exadel.ehitchhiking.responses.ResponseMany;
import com.exadel.ehitchhiking.services.ITripsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/trips")
public class TripsController {


    @Autowired
    private ITripsService trips;

    @GetMapping("/history")
    public ResponseMany<TripsHistoryVO> getHistory(String id) {

        ResponseMany<TripsHistoryVO> response = new ResponseMany<>();
        List<TripsHistoryVO> list;
        try {

            list = trips.getAllHistory(Integer.parseInt(id));

        } catch (Exception e) {
            System.out.println(e);
            response.setStatus("500");
            response.setData(null);
            return response;
        }
        response.setStatus("200");
        response.setData(list);
        return response;
    }
}
