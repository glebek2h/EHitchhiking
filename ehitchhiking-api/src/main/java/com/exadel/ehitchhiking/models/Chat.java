package com.exadel.ehitchhiking.models;

import lombok.*;
import org.apache.tomcat.util.json.JSONParser;

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


    @Setter
    @Getter
    @Column(name = "\"HISTORY\"")
    private String history;

    public Chat(String history){
        this.history = history;
    }
}
