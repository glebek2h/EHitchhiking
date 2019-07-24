package com.exadel.ehitchhiking.responses;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@NoArgsConstructor
public class ResponseMany<T> {

    @Getter
    @Setter
    private String status;

    @Getter
    @Setter
    private List<T> data;

    @Getter
    @Setter
    private String msg;
}
