package com.exadel.ehitchhiking.models;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.databind.util.JSONPObject;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "\"CHAT\"", schema = "public")
@ToString
@EqualsAndHashCode
@NoArgsConstructor
public class Chat {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Setter(AccessLevel.PRIVATE)
    @Getter
    @Column(name = "\"ID\"")
    private Integer id;

    @Getter
    @Setter
    @JoinColumn(name = "\"HISTORY\"")
    private String history;

    public Chat(String history){
        this.history = history;
    }
}
