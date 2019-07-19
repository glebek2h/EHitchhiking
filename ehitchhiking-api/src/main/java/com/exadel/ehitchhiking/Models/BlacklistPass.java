package com.exadel.ehitchhiking.Models;


import lombok.*;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;


@Entity
@Table(name = "blacklist_pass")
@ToString
@EqualsAndHashCode
@NoArgsConstructor
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
    private Passenger passenger;


    @Getter
    @Setter
    @OneToMany (fetch = FetchType.LAZY)
    private Set<Driver> driverSet;

    public BlacklistPass(Passenger passenger){
        this.passenger = passenger;
    }

}