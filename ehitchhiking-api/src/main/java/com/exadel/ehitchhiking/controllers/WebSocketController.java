package com.exadel.ehitchhiking.controllers;

import com.exadel.ehitchhiking.models.ChatMessage;
import com.exadel.ehitchhiking.models.vo.ChatMessageVO;
import com.exadel.ehitchhiking.requests.RequestChatMessage;
import com.exadel.ehitchhiking.responses.ResponseChatMessage;
import com.exadel.ehitchhiking.services.IChatMessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JsonParser;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Date;
import java.util.List;

@Controller
public class WebSocketController {
    private final SimpMessagingTemplate template;


    @Autowired
    WebSocketController(SimpMessagingTemplate template){
        this.template = template;
    }

    @Autowired
    IChatMessageService service;


    @MessageMapping("/send/message")
    @SendTo("/topic/public")
    public void onReseivedMessage(@RequestBody RequestChatMessage message){
        ChatMessage chatMessage = new ChatMessage(message.getContent(), message.getId(), message.getSender(),
                message.getType(), (new Date()).getTime());

        String userEmail = message.getSender();
        ResponseChatMessage responseMessage = new ResponseChatMessage(
                userEmail,
                service.getMemberName(userEmail),
                message.getContent(),
                (new Date()).getTime(),
                message.getType());
        this.template.convertAndSend("/socket/chat", responseMessage);
        service.saveChatMessage(chatMessage.getId(), chatMessage);
    }

    @MessageMapping("/chat/add/user")
    @SendTo("/topic/public")
    public ChatMessage addUser(@Payload ChatMessage chatMessage,
                               SimpMessageHeaderAccessor headerAccessor) {
        // Add username in web socket session
        headerAccessor.getSessionAttributes().put("sender", chatMessage.getSender());
        headerAccessor.getSessionAttributes().put("type", chatMessage.getType());
        return chatMessage;
    }
}
