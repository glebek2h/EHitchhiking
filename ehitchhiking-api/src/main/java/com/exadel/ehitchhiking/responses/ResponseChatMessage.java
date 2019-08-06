package com.exadel.ehitchhiking.responses;

import com.exadel.ehitchhiking.models.ChatMessage;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ResponseChatMessage {

    private String email;
    private String name;
    private String content;
    private Long date;
    private ChatMessage.MessageType type;
    private Integer chatId;

}
