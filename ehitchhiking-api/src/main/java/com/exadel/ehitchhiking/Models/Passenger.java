package com.exadel.ehitchhiking.Models;


import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@ToString
@Table(name = "passenger", schema = "public")
@NoArgsConstructor
@EqualsAndHashCode
public class Passenger  {

    @Id
    @Column(name = "pass_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Setter
    @Getter
    private Integer id;

    @Getter
    @Setter
    @OneToOne
    @JoinColumn(name = "user_id")
    private Employee employee;


    @Getter
    @Setter
    @Column(name = "rate_pass")
    private double passengerRate;

    //this is the amount of people that have rated the pass
    @Getter
    @Setter
    @Column(name = "rating_people")
    private int ratingAmount;

    public Passenger(Employee employee, double passengerRate, int ratingAmount) {
        this.employee = employee;
        this.passengerRate = passengerRate;
        this.ratingAmount = ratingAmount;
    }
}