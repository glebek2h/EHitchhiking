package com.exadel.ehitchhiking.Models;


import lombok.*;
import org.hibernate.annotations.Cascade;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@ToString
@Table(name = "driver")
@EqualsAndHashCode
@NoArgsConstructor
public class Driver {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Setter
    @Getter
    @Column(name = "driver_id")
    private Integer id;

    @Getter
    @Setter
    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private Employee employee;

    @Getter
    @Setter
    @Column(name = "rate_driver")
    private float rate;

    @Getter
    @Setter
    @Column(name = "rating_people")
    private int ratedPeoples;

    @Getter
    @Setter
    @ManyToMany
    @JoinTable(name = "blacklist_driver", joinColumns = @JoinColumn(name = "driver_id"),
            inverseJoinColumns = @JoinColumn(name = "pass_id"))
    private List<Passenger> passengers = new ArrayList<>();

    public Driver(Employee employee, float rate, int ratedPeoples) {
        this.employee = employee;
        this.rate = rate;
        this.ratedPeoples = ratedPeoples;
    }
}
