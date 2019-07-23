package com.exadel.ehitchhiking.Models;


import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;


@Entity
@Table(name = "car")
@ToString
@EqualsAndHashCode
@NoArgsConstructor
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Setter(AccessLevel.PRIVATE)
    @Getter
    @Column(name = "car_id")
    private Integer id;


    @Setter
    @Getter
    @Column(name = "car_color")
    private String color;


    @Setter
    @Getter
    @Column(name = "veh_number")
    private String number;


    @Setter
    @Getter
    @Column(name = "model")
    private String model;

    @Setter
    @Getter
    @ManyToOne
    @JoinColumn(name = "id_driver")
    private Driver driver;

    public Car(String color, String number, String model,
               Driver driver) {
        this.driver = driver;
        this.color = color;
        this.number = number;
        this.model = model;
    }
}
