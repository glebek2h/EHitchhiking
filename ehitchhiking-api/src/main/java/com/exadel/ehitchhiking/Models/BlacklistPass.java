//package com.exadel.ehitchhiking.Models;
//
//
//import lombok.*;
//import org.hibernate.annotations.Cascade;
//
//import javax.persistence.*;
//import java.util.ArrayList;
//import java.util.List;
//
//
//@Entity
//@Table(name = "blacklist_pass")
//@ToString
//@EqualsAndHashCode
//@NoArgsConstructor
//public class BlacklistPass  {
//
//    @Id
//    @Column(name = "blp_id")
//    @Getter
//    @Setter
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    private Integer id;
//
//    @Getter
//    @Setter
//    @OneToOne (fetch = FetchType.LAZY)
//    @JoinColumn(name = "pass_id")
//    private Passenger passenger;
//
//    @Getter
//    @Setter
//    @Column(name = "driver_id")
//    private int driverId;
//
//    @Getter
//    @Setter
//    @OneToMany
//    @JoinColumn(name = "driver_id", updatable = false)
//    private List<Driver> drivers;
//
//    public BlacklistPass(Passenger passenger){
//        this.passenger = passenger;
//        this.drivers = new ArrayList<>();
//    }
//}