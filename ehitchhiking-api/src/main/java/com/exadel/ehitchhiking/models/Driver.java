package com.exadel.ehitchhiking.models;


import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@ToString
@Table(name = "DRIVER")
@EqualsAndHashCode
@NoArgsConstructor
public class Driver {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Setter
    @Getter
    @Column(name = "ID")
    private Integer id;

    @Getter
    @Setter
    @OneToOne
    @JoinColumn(name = "USER_ID", referencedColumnName = "ID")
    private Employee employee;

    @Getter
    @Setter
    @Column(name = "RATE_DRIVER")
    private float rate;

    @Getter
    @Setter
    @Column(name = "RATING_PEOPLE")
    private int ratedPeoples;

    @Getter
    @Setter
    @ManyToMany
    @JoinTable(name = "BLACKLIST_DRIVER", joinColumns = @JoinColumn(name = "DRIVER_ID"),
            inverseJoinColumns = @JoinColumn(name = "PASS_ID"))
    private List<Passenger> passengers = new ArrayList<>();

    public Driver(Employee employee, float rate, int ratedPeoples) {
        this.employee = employee;
        this.rate = rate;
        this.ratedPeoples = ratedPeoples;
    }
}
