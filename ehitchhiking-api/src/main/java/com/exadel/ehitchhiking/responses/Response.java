package com.exadel.ehitchhiking.responses;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
public class Response<T> {

    @Getter
    @Setter
    private String status;

    @Getter
    @Setter
    private T data;
}
