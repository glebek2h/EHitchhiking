package com.exadel.ehitchhiking.requests;

import com.exadel.ehitchhiking.models.ChatMessage;
import lombok.Data;

@Data
public class RequestChatMessage {

    private Integer id;

    private String sender;

    private ChatMessage.MessageType type;

    private String content;

}
