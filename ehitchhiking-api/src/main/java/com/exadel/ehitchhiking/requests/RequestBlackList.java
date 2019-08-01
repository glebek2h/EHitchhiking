package com.exadel.ehitchhiking.requests;

import lombok.Data;

import java.util.List;

@Data
public class RequestBlackList {

    private int idTrip;

    private List<RequestId> data;
}
