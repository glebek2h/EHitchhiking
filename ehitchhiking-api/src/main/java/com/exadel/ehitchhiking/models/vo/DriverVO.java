package com.exadel.ehitchhiking.models.vo;

import com.exadel.ehitchhiking.models.Driver;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class DriverVO {

    private Integer id;
    private String firstName;
    private String lastName;
    private String email;
    private float rate;
    private String phone;
    @JsonIgnore
    private int ratedPeoples;

    public static DriverVO fromEntity(Driver driver) {
        return new DriverVO(
                driver.getId(),
                EmployeeVO.fromEntity(driver.getEmployee()).getFirstName(),
                EmployeeVO.fromEntity(driver.getEmployee()).getLastName(),
                EmployeeVO.fromEntity(driver.getEmployee()).getEmail(),
                driver.getRate(),
                EmployeeVO.fromEntity(driver.getEmployee()).getPhoneNumber(),
                driver.getRatedPeoples()
        );
    }
}
