package com.exadel.ehitchhiking.models.vo;

import com.exadel.ehitchhiking.models.Car;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CarVO {
    private Integer id;
    private String color;
    private String number;
    private String model;

    public static CarVO fromEntity(Car car) {
        return new CarVO(
                car.getId(),
                car.getColor(),
                car.getNumber(),
                car.getModel()
        );
    }
    //TODO: is deleted
}
