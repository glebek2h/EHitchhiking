package com.exadel.ehitchhiking.services;

import com.exadel.ehitchhiking.models.Chat;
import com.exadel.ehitchhiking.models.ChatMessage;
import com.exadel.ehitchhiking.models.vo.ChatVO;

import java.util.List;

public interface IChatMessageService {
    void saveChatMessage(int id, ChatMessage message);
    Chat createChat();
    List<ChatVO> getChatInfo(int id);
}
