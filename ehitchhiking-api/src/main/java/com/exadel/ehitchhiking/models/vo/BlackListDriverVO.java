package com.exadel.ehitchhiking.models.vo;

import com.exadel.ehitchhiking.models.Driver;
import lombok.AllArgsConstructor;
import lombok.Data;


import java.util.List;
import java.util.stream.Collectors;


@Data
@AllArgsConstructor
public class BlackListDriverVO {

    private int idDriver;

    private List<PassengerVO> listOfPassenger;

    public static BlackListDriverVO fromEntity(Driver driver) {
        return new BlackListDriverVO(
                driver.getId(),
                driver.getPassengers().stream().map(PassengerVO::fromEntity).collect(Collectors.toList())
        );
    }
}
