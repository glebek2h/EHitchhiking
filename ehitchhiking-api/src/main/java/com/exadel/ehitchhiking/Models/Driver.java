package com.exadel.ehitchhiking.Models;


import lombok.*;
import org.springframework.stereotype.Component;

import javax.persistence.*;

@Entity
@ToString
@Table(name = "driver", schema = "public")
@NoArgsConstructor
@EqualsAndHashCode
public class Driver {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Setter
    @Getter
    private Integer driver_id;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName="id")
    @Getter
    @Setter
    private Employee user;

    // what is the cumulative rate of the driver
    @Getter
    @Setter
    private float rate_driver;


    // the amount of people that have rated the driver
    @Getter
    @Setter
    private int rating_people;

    public Driver(float rate, int rating_people){

        this.rate_driver = rate;
        this.rating_people = rating_people;
    }
}
