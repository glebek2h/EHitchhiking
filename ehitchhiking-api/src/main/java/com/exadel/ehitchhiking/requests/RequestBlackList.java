package com.exadel.ehitchhiking.requests;

import lombok.Data;

@Data
public class RequestBlackList {

    private String idDriver;

    private String idPass;

    private String employeeId;

    private String role; // enum (roles) and maybe the status of the trip
    // in what trip was the rate given
}
