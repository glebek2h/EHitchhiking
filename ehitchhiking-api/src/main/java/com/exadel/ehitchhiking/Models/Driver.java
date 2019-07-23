package com.exadel.ehitchhiking.Models;


import lombok.*;
import org.hibernate.annotations.Cascade;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.io.Serializable;

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
    @JoinColumn(name = "user_id" ,referencedColumnName = "id")
    private Employee employee;

    @Getter
    @Setter
    @Column(name = "rate_driver")
    private float rate;

    @Getter
    @Setter
    @Column(name = "rating_people")
    private int ratedPeoples;

    public Driver(Employee employee, float rate, int ratedPeoples){
        this.employee = employee;
        this.rate = rate;
        this.ratedPeoples = ratedPeoples;
    }
}
