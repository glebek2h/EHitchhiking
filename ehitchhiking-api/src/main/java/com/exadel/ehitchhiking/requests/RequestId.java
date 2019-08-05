package com.exadel.ehitchhiking.requests;

import lombok.Data;

@Data
public class RequestId {

    private Integer id;

    private Boolean isBlocked;

    private Float rate;
}
