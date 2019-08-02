package com.exadel.ehitchhiking.responses;

import lombok.*;

@AllArgsConstructor
@Data
public class Response {

    private String msgType;

    private Object data;

    private String msg;

    public static Response setError(String msg){
        return new Response("error", null, msg);
    }

    public static Response setSuccess(Object data, String msg){
        return new Response("success", data, msg);
    }
}
