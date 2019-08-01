package com.exadel.ehitchhiking.responses;

import lombok.*;

@AllArgsConstructor
@Data
public class Response {

    private String status;

    private Object data;

    private String msg;

    public static Response setError(String msg){
        return new Response("error", null, msg);
    }

    public static Response setSuccess(Object data){
        return new Response("success", data, null);
    }
}
