package com.exadel.ehitchhiking.models;

import lombok.*;


@EqualsAndHashCode
@NoArgsConstructor
@ToString
@AllArgsConstructor
public class ChatMessage {

    @Getter
    @Setter
    private String content;

    @Getter
    @Setter
    private int id;

    @Getter
    @Setter
    private String sender;

    @Getter
    @Setter
    private MessageType type;

    @Getter
    @Setter
    private Long date;

    @ToString
    public enum MessageType{
      CHAT, LEAVE, JOIN
    }
}
