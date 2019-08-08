package com.exadel.ehitchhiking.models.vo;

import com.exadel.ehitchhiking.models.ChatMessage;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ChatMessageVO {


    private String email;
    private String name;
    private String content;
    private Long date;

    public static ChatMessageVO getNewMsgVO(ChatMessage chatMessage, String name) {

            return new ChatMessageVO(
                    chatMessage.getSender(),
                    name,
                    chatMessage.getContent(),
                    chatMessage.getDate());
    }


}
