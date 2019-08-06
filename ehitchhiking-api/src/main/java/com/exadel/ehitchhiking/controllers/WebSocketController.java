package com.exadel.ehitchhiking.controllers;

import com.exadel.ehitchhiking.models.ChatMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import java.text.SimpleDateFormat;
import java.util.Date;

@Controller
public class WebSocketController {
    private final SimpMessagingTemplate template;


    @Autowired
    WebSocketController(SimpMessagingTemplate template){
        this.template = template;
    }
    @MessageMapping("/send/message")
    @SendTo("/chat/public")
    public void onReseivedMessage(String message){
        this.template.convertAndSend("/chat", new SimpleDateFormat("HH:mm:ss").format(new Date())+"-"+message);
    }

    @MessageMapping("/chat/addUser")
    @SendTo("/topic/public")
    public ChatMessage addUser(@Payload ChatMessage chatMessage,
                               SimpMessageHeaderAccessor headerAccessor) {
        // Add username in web socket session
        headerAccessor.getSessionAttributes().put("username", chatMessage.getSender());
        return chatMessage;
    }
}
