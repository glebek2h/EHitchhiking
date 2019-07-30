package com.exadel.ehitchhiking.models;


import lombok.*;

import javax.persistence.*;


@Entity
@Table(name = "\"CAR\"", schema = "public")
@ToString
@EqualsAndHashCode
@NoArgsConstructor
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Setter(AccessLevel.PRIVATE)
    @Getter
    @Column(name = "\"ID\"")
    private Integer id;


    @Setter
    @Getter
    @Column(name = "\"CAR_COLOR\"")
    private String color;


    @Setter
    @Getter
    @Column(name = "\"VEH_NUMBER\"")
    private String number;


    @Setter
    @Getter
    @Column(name = "\"MODEL\"")
    private String model;

    @Setter
    @Getter
    @Column(name = "\"IS_DELETED\"")
    private boolean isDeleted;

    @Setter
    @Getter
    @ManyToOne (fetch = FetchType.EAGER)
    @JoinColumn(name = "\"DRIVER_ID\"")
    private Driver driver;

    public Car(String color, String number, String model,
               Driver driver) {
        this.driver = driver;
        this.color = color;
        this.number = number;
        this.model = model;
        this.isDeleted = false;
    }
}
