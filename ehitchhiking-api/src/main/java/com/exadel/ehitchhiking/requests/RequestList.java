package com.exadel.ehitchhiking.requests;


import lombok.Data;

import java.util.List;

@Data
public class RequestList{
    public List<RequestPassenger> requestListPass;

    public RequestDriver[] requestListDriver;

}
