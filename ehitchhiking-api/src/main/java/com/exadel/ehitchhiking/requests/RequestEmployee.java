package com.exadel.ehitchhiking.requests;


import lombok.Data;

@Data
public class RequestEmployee {

    private String id;
    private String isAdmin;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String phoneNum;
}

