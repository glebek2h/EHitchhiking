package com.exadel.ehitchhiking.models.vo;

import com.exadel.ehitchhiking.models.Driver;
import com.exadel.ehitchhiking.models.Passenger;
import lombok.AllArgsConstructor;
import lombok.Data;


import java.util.List;
import java.util.stream.Collectors;

@Data
@AllArgsConstructor
public class BlackListPassVO {


    private int idPass;

    private List<DriverVO> listOfDrivers;

    public static BlackListPassVO fromEntity(Passenger passenger) {
        return new BlackListPassVO(
                passenger.getId(),
                passenger.getDrivers().stream().map(DriverVO::fromEntity).collect(Collectors.toList())
        );
    }
}
