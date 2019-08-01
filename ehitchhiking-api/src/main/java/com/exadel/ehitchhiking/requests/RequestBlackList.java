package com.exadel.ehitchhiking.requests;

import lombok.Data;

@Data
public class RequestBlackList {

    private int idDriver;

    private int idPass;

    private int employeeId;

    private boolean isBlocked;

    private String role; // enum (roles) and maybe the status of the trip
    // in what trip was the rate given
}
