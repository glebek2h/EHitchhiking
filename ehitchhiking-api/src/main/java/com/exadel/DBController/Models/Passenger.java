package com.exadel.DBController.Models;


import lombok.*;

import javax.persistence.*;

@Entity
@ToString
@Table(name = "passenger", schema = "public")
@NoArgsConstructor
@EqualsAndHashCode
public class Passenger{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Setter(AccessLevel.PRIVATE)
    @Getter
    private Integer pass_id;

    @Getter
    @Setter
    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName="id")
    private Employee user;


    @Getter
    @Setter
    private float rate;

    public Passenger(float rate){
        this.rate = rate;
    }

   // public void setUser(Employee user){
   //     this.user = user;
  //  }


//    @OneToMany(mappedBy = "pass")
//    private Set<Trip_Pass> setTripPass;
//
//
//    private Employee emp;
//
//
//    @OneToOne(mappedBy = "pass")
//    private Blacklist_Pass blackListPassenger;
//
//    @ManyToOne
//    private Blacklist_Driver blackListDriver;
}