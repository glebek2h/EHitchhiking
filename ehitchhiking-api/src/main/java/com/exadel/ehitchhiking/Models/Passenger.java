package com.exadel.ehitchhiking.Models;


import lombok.*;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.ManyToAny;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@ToString
@Table(name = "passenger")
@EqualsAndHashCode
@NoArgsConstructor
public class Passenger {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Setter
    @Getter
    @Column(name = "pass_id")
    private Integer id;

    @Getter
    @Setter
    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
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

    @Getter
    @Setter
    @ManyToMany
    @JoinTable(name = "blacklist_pass", joinColumns = @JoinColumn(name = "pass_id"),
            inverseJoinColumns = @JoinColumn(name = "driver_id"))
    private List<Driver> drivers = new ArrayList<>();

    public Passenger(Employee employee, float rate, int ratedPeoples) {
        this.employee = employee;
        this.rate = rate;
        this.ratedPeoples = ratedPeoples;
    }
}