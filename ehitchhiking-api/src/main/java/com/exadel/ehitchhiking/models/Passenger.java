package com.exadel.ehitchhiking.models;


import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@ToString
@Table(name = "\"PASSENGER\"")
@EqualsAndHashCode
@NoArgsConstructor
public class Passenger {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Setter
    @Getter
    @Column(name = "\"ID\"")
    private Integer id;

    @Getter
    @Setter
    @OneToOne
    @JoinColumn(name = "\"EMPLOYEE_ID\"")
    private Employee employee;


    @Getter
    @Setter
    @Column(name = "\"RATE_PASSENGER\"")
    private float rate;

    //this is the amount of people that have rated the pass
    @Getter
    @Setter
    @Column(name = "\"RATING_PEOPLE\"")
    private int ratedPeoples;

    @Getter
    @Setter
    @ManyToMany
    @JoinTable(name = "\"BLACKLIST_PASSENGER\"", joinColumns = @JoinColumn(name = "\"PASS_ID\""),
            inverseJoinColumns = @JoinColumn(name = "\"DRIVER_ID\""))
    private List<Driver> drivers = new ArrayList<>();

    public Passenger(Employee employee, float rate, int ratedPeoples) {
        this.employee = employee;
        this.rate = rate;
        this.ratedPeoples = ratedPeoples;
    }
}