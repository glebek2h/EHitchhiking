package com.exadel.ehitchhiking.Response;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@ToString
public class Response<T> {

    @Getter
    @Setter
    private String status;

    @Getter
    @Setter
    private T object;
}