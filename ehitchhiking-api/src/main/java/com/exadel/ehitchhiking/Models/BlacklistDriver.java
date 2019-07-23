package com.exadel.ehitchhiking.Models;



import lombok.*;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
@Table(name = "blacklist_driver")
@ToString
@EqualsAndHashCode
@NoArgsConstructor
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
    @OneToMany (fetch = FetchType.EAGER)
    @JoinColumn(name = "pass_id", updatable = false)
    private List<Passenger> passList;

    public BlacklistDriver(Driver driver){
        this.driver = driver;
        this.passList = new ArrayList<>();
    }
}
