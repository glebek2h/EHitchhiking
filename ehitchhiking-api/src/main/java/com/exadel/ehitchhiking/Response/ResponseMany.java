package com.exadel.ehitchhiking.Response;

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
    private List<T> objects;
}