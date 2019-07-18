package com.exadel.ehitchhiking.Models;


import lombok.*;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.util.Set;


@Entity
@Table(name = "cars", schema = "public")
@ToString
@EqualsAndHashCode
public class Cars {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.PRIVATE)
    @Getter
    private int car_id;


    @Setter
    @Getter
    private String car_color;


    @Setter
    @Getter
    private String veh_number;


    @Setter
    @Getter
    private String model;

    @Setter
    @Getter
    @ManyToOne
    @JoinColumn(name = "driver_id", referencedColumnName = "driver_id")
    private Driver drive;


    @OneToMany(mappedBy = "car")
    private Set<TripDriver> setTripDriver;


    public Cars(){}

    public Cars(String color, String number, String car_model,
                int id_of_driver){

        this.car_color = color;
        this.veh_number= number;
        this.model = car_model;
    }
}
