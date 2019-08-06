package com.exadel.ehitchhiking.models;

import lombok.*;

import java.util.Date;

@EqualsAndHashCode
@NoArgsConstructor
@ToString
public class ChatMessage {

    @Getter
    @Setter
    private String content;

    @Getter
    @Setter
    private String sender;

    @Getter
    @Setter
    private MessageType type;

    @Getter
    @Setter
    private Long date;

    public enum MessageType{
      CHAT, LEAVE, JOIN
    }
}
