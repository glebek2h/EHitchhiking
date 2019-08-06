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
import java.time.LocalDateTime;
import java.util.Calendar;
import java.util.Date;

@Controller
public class WebSocketController {
    private final SimpMessagingTemplate template;


    @Autowired
    WebSocketController(SimpMessagingTemplate template){
        this.template = template;
    }

    @MessageMapping("/send/message")
    @SendTo("/topic/public")
    public void onReseivedMessage(ChatMessage message){
        message.setDate((new Date()).getTime());
        this.template.convertAndSend("/chat",message);
    }

    @MessageMapping("/chat/addUser")
    @SendTo("/topic/public")
    public ChatMessage addUser(@Payload ChatMessage chatMessage,
                               SimpMessageHeaderAccessor headerAccessor) {
        // Add username in web socket session
        headerAccessor.getSessionAttributes().put("sender", chatMessage.getSender());
        headerAccessor.getSessionAttributes().put("type", chatMessage.getType());
        return chatMessage;
    }
}
