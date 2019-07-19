package com.exadel.ehitchhiking.Models;



import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;


@Entity
@Table(name = "blacklist_driver", schema = "public")
@ToString
@EqualsAndHashCode
public class BlacklistDriver  {

    @Id
    @Column(name = "bld_id")
    @Getter
    @Setter
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Getter
    @Setter
    @OneToOne (fetch = FetchType.LAZY)
    @JoinColumn(name = "driver_id")
    private Driver driver;

    @Getter
    @Setter
    @OneToMany(fetch = FetchType.LAZY)
    private Set<Passenger> passSet;

    public BlacklistDriver(){}

}
