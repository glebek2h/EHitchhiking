package com.exadel.ehitchhiking.models.vo;


import com.exadel.ehitchhiking.models.Passenger;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;


@Data
@AllArgsConstructor
public class PassengerVO {

    private Integer id;
    private String firstName;
    private String lastName;
    private String email;
    private float rate;
    @JsonIgnore
    private int ratedPeoples;

    public static PassengerVO fromEntity(Passenger passenger) {
        return new PassengerVO(
                passenger.getId(),
                EmployeeVO.fromEntity(passenger.getEmployee()).getFirstName(),
                EmployeeVO.fromEntity(passenger.getEmployee()).getLastName(),
                EmployeeVO.fromEntity(passenger.getEmployee()).getEmail(),
                passenger.getRate(),
                passenger.getRatedPeoples()
        );
    }

}
