package com.exadel.ehitchhiking.responses;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@NoArgsConstructor
public class Response<T> {

    @Getter
    @Setter
    private String status;

    @Getter
    @Setter
    private T data;

    @Getter
    @Setter
    private String msg;
}
