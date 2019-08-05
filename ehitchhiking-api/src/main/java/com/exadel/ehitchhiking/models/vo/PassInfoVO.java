package com.exadel.ehitchhiking.models.vo;

import com.exadel.ehitchhiking.models.Passenger;
import com.exadel.ehitchhiking.models.TripPass;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.geo.Point;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
public class PassInfoVO {

    private int id;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private float rate;
    private String startingPoint;
    private String endingPoint;
    private int seats;

    public static PassInfoVO fromEntity(TripPass tripPass) {
        return new PassInfoVO(
                EmployeeVO.fromEntity(tripPass.getPassenger().getEmployee()).getId(),
                EmployeeVO.fromEntity(tripPass.getPassenger().getEmployee()).getFirstName(),
                EmployeeVO.fromEntity(tripPass.getPassenger().getEmployee()).getLastName(),
                EmployeeVO.fromEntity(tripPass.getPassenger().getEmployee()).getEmail(),
                EmployeeVO.fromEntity(tripPass.getPassenger().getEmployee()).getPhoneNumber(),
                tripPass.getPassenger().getRate(),
                tripPass.getStartPoint(),
                tripPass.getEndPoint(),
                tripPass.getBookedSeats()


        );
    }

    public static List<PassInfoVO> fromEntityList(List<TripPass> tripPassList){
        List<PassInfoVO> passInfoVOS = new ArrayList<>();
        for (TripPass tr : tripPassList){
            passInfoVOS.add(PassInfoVO.fromEntity(tr));
        }
        return passInfoVOS;
    }
}
