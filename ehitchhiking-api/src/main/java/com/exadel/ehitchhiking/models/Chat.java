package com.exadel.ehitchhiking.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonPOJOBuilder;
import lombok.*;
import org.apache.tomcat.util.json.JSONParser;

import javax.persistence.*;

@Entity
@Table(name = "\"CHAT\"", schema = "public")
@ToString
@EqualsAndHashCode
@NoArgsConstructor
@JsonPOJOBuilder(withPrefix = "")
public class Chat {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Setter(AccessLevel.PRIVATE)
    @Getter
    @Column(name = "\"ID\"")
    private Integer id;


    @Setter
    @Getter
    @JsonProperty("history")
    @Column(name = "\"HISTORY\"")
    private String history;

    public Chat(String history){
        this.history = history;
    }
}
