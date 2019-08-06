package com.exadel.ehitchhiking.daos;

import com.exadel.ehitchhiking.models.Chat;
import com.exadel.ehitchhiking.models.ChatMessage;

public interface IChatDAO extends IBasicDAO<Chat> {
    String getHistory(int id);
}
