package com.exadel.ehitchhiking.Models;


import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@ToString
@Table(name = "passenger")
@EqualsAndHashCode
@NoArgsConstructor
public class Passenger  {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Setter
    @Getter
    @Column(name = "pass_id")
    private Integer id;

    @Getter
    @Setter
    @OneToOne(mappedBy = "user_id")
    private Employee employee;


    @Getter
    @Setter
    @Column(name = "rate_passenger")
    private float rate;

    //this is the amount of people that have rated the pass
    @Getter
    @Setter
    @Column(name = "rating_people")
    private int ratedPeoples;

    public Passenger(Employee employee, float rate, int ratedPeoples) {
        this.employee = employee;
        this.rate = rate;
        this.ratedPeoples = ratedPeoples;
    }
}