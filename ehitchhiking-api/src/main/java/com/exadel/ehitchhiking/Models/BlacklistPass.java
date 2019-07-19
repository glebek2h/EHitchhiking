package com.exadel.ehitchhiking.Models;


import lombok.*;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;


@Entity
@Table(name = "blacklist_pass", schema = "public")
@ToString
@EqualsAndHashCode
public class BlacklistPass  {

    @Id
    @Column(name = "blp_id")
    @Getter
    @Setter
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Getter
    @Setter
    @OneToOne (fetch = FetchType.LAZY)
    @JoinColumn(name = "pass_id")
    private Passenger pass;


    @Getter
    @Setter
    @OneToMany (fetch = FetchType.LAZY)
    private Set<Driver> driverSet;

    public BlacklistPass(){}

}