package com.exadel.DBController.Models;


import lombok.*;

import java.io.*;
import java.util.Set;

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

    @Getter
    @Setter
    private float rate;

    public Driver(float rate){
        this.rate = rate;
    }
}
